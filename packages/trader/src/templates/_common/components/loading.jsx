import classNames from 'classnames';
import React from 'react';

const Loading = ({ className, is_invisible, theme, id }) => {
    const theme_class = theme ? `barspinner--${theme}` : 'barspinner--dark';
    return (
        <div
            id={id}
            className={classNames('barspinner', {
                theme_class,
                'invisible': is_invisible,
            }, className)}
        >
            { Array.from(new Array(5)).map((x, inx) => (
                <div key={inx} className={`barspinner__rect barspinner__rect--${inx + 1} rect${inx + 1}`} />
            ))}
        </div>
    );
};

export default Loading;
