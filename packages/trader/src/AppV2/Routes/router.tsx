import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { UILoader, RouteWithSubroutes } from '@deriv/components';
import traderRoutes from './routes';
import { observer, useStore } from '@deriv/stores';
import Page404 from 'Modules/Page404';

const Router: React.FC = () => {
    const { client, common } = useStore();
    const { is_logged_in } = client;
    const { current_language } = common;

    return (
        <Suspense fallback={<UILoader />}>
            <BrowserRouter>
                <Switch>
                    {traderRoutes.map((route, index) => (
                        <RouteWithSubroutes
                            key={index}
                            is_logged_in={is_logged_in}
                            language={current_language}
                            Component404={Page404}
                            should_redirect_login={true}
                            routes={traderRoutes}
                            to={''}
                            {...route}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default observer(Router);
