import React, { CSSProperties } from 'react';

import styles from './icon.module.scss';

export interface IIConProps {
    className?: string;
    size?: number;
    color?: string;
    url: string;
    style?: CSSProperties;
    height?: number;
    onClick?: (event?: React.MouseEvent<HTMLSpanElement>) => void;
}
export const Icon = React.forwardRef<HTMLSpanElement, IIConProps>(
    ({ size = 14, className, onClick, height, color, url, style }, ref) => (
        <span
            onClick={onClick}
            ref={ref}
            className={`${styles.icon} ${className}`}
            style={
                {
                    color,
                    display: 'inline-block',
                    maskImage: `url(${url})`,
                    WebkitMaskImage: `url(${url})`,
                    '--icon-size': `${size / 16}rem`,
                    height,
                    ...style,
                } as CSSProperties
            }
        ></span>
    )
);

Icon.displayName = 'Icon';
