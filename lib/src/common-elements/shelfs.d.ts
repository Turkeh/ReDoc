import * as React from 'react';
import { ResolvedThemeInterface, StyledComponentClass } from '../styled-components';
export declare const ShelfIcon: StyledComponentClass<{
    className?: string | undefined;
    float?: "left" | "right" | undefined;
    size?: string | undefined;
    color?: string | undefined;
    direction: "left" | "right" | "up" | "down";
    style?: React.CSSProperties | undefined;
}, ResolvedThemeInterface, Pick<{
    className?: string | undefined;
    float?: "left" | "right" | undefined;
    size?: string | undefined;
    color?: string | undefined;
    direction: "left" | "right" | "up" | "down";
    style?: React.CSSProperties | undefined;
}, "style" | "className" | "color" | "size" | "float" | "direction"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
export declare const Badge: StyledComponentClass<{
    type: string;
} & React.HTMLProps<HTMLElement>, ResolvedThemeInterface, {
    type: string;
} & React.HTMLProps<HTMLElement>>;
