import React from 'react';
import Text from '../../text';

type TTickCounterBar = {
    current_tick?: number;
    label: string;
};
const TickCounterBar = ({ current_tick, label }: TTickCounterBar) => (
    <div className='dc-tick-counter-bar__container'>
        <div className='dc-tick-counter-bar__track'>
            <Text size='xxs' weight='bold' align='center' color='profit-success' className='dc-tick-counter-bar__text'>
                {`${current_tick} ${label}`}
            </Text>
        </div>
    </div>
);

export default React.memo(TickCounterBar);
