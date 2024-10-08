import React from 'react';
import { useRemoteConfig } from '@deriv/api';
import { useDevice } from '@deriv-com/ui';
import { useIsMounted } from '@deriv/shared';
import { observer, useStore } from '@deriv/stores';
import { browserSupportsWebAuthn } from '@simplewebauthn/browser';
import P2PIFrame from 'Modules/P2PIFrame';
import SmartTraderIFrame from 'Modules/SmartTraderIFrame';
import ErrorBoundary from './Components/Elements/Errors/error-boundary.jsx';
import AppToastMessages from './Containers/app-toast-messages.jsx';
import AppContents from './Containers/Layout/app-contents.jsx';
import Footer from './Containers/Layout/footer.jsx';
import Header from './Containers/Layout/header';
import AppModals from './Containers/Modals';
import Routes from './Containers/Routes/routes.jsx';
import Devtools from './Devtools';
import LandscapeBlocker from './Components/Elements/LandscapeBlocker';
import initDatadog from '../Utils/Datadog';
import { ThemeProvider } from '@deriv-com/quill-ui';
import { useGrowthbookGetFeatureValue, useGrowthbookIsOn } from '@deriv/hooks';
import { useTranslations } from '@deriv-com/translations';
import initHotjar from '../Utils/Hotjar';

const AppContent: React.FC<{ passthrough: unknown }> = observer(({ passthrough }) => {
    const store = useStore();
    const { is_client_store_initialized, has_wallet, setIsPasskeySupported, setIsPhoneNumberVerificationEnabled } =
        store.client;
    const { current_language } = store.common;
    const { isMobile } = useDevice();
    const { switchLanguage } = useTranslations();

    const [isWebPasskeysFFEnabled, isGBLoaded] = useGrowthbookIsOn({
        featureFlag: 'web_passkeys',
    });
    const [isServicePasskeysFFEnabled] = useGrowthbookIsOn({
        featureFlag: 'service_passkeys',
    });
    const [isPhoneNumberVerificationEnabled, isPhoneNumberVerificationGBLoaded] = useGrowthbookGetFeatureValue({
        featureFlag: 'phone_number_verification',
    });
    const isMounted = useIsMounted();
    const { data } = useRemoteConfig(isMounted());
    const { tracking_datadog } = data;
    const is_passkeys_supported = browserSupportsWebAuthn();

    React.useEffect(() => {
        switchLanguage(current_language);
    }, [current_language, switchLanguage]);

    React.useEffect(() => {
        if (isPhoneNumberVerificationGBLoaded) {
            setIsPhoneNumberVerificationEnabled(!!isPhoneNumberVerificationEnabled);
        }
    }, [isPhoneNumberVerificationEnabled, setIsPhoneNumberVerificationEnabled, isPhoneNumberVerificationGBLoaded]);

    React.useEffect(() => {
        if (isGBLoaded && isWebPasskeysFFEnabled && isServicePasskeysFFEnabled) {
            setIsPasskeySupported(
                is_passkeys_supported && isServicePasskeysFFEnabled && isWebPasskeysFFEnabled && isMobile
            );
        }
    }, [
        isServicePasskeysFFEnabled,
        isGBLoaded,
        isWebPasskeysFFEnabled,
        is_passkeys_supported,
        isMobile,
        setIsPasskeySupported,
    ]);

    React.useEffect(() => {
        initDatadog(tracking_datadog);
    }, [tracking_datadog]);

    React.useEffect(() => {
        if (is_client_store_initialized) initHotjar(store.client);
    }, [store.client, is_client_store_initialized]);

    // intentionally switch the user with wallets to light mode and EN language
    React.useLayoutEffect(() => {
        if (has_wallet) {
            if (store.ui.is_dark_mode_on) {
                store.ui.setDarkMode(false);
            }
            if (store.common.current_language !== 'EN') {
                store.common.changeSelectedLanguage('EN');
            }
        }
    }, [has_wallet, store.common, store.ui]);

    return (
        <ThemeProvider theme={store.ui.is_dark_mode_on ? 'dark' : 'light'}>
            <LandscapeBlocker />
            <Header />
            <ErrorBoundary root_store={store}>
                <AppContents>
                    {/* TODO: [trader-remove-client-base] */}
                    <Routes passthrough={passthrough} />
                </AppContents>
            </ErrorBoundary>
            <Footer />
            <ErrorBoundary root_store={store}>
                <AppModals />
            </ErrorBoundary>
            <SmartTraderIFrame />
            <P2PIFrame />
            <AppToastMessages />
            <Devtools />
        </ThemeProvider>
    );
});

export default AppContent;
