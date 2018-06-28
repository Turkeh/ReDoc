import * as React from 'react';
import { InterpolationFunction, Styles, ThemeProps } from 'styled-components';
import { ResolvedThemeInterface, StyledComponentClass } from '../../styled-components';
export declare const OperationBadge: StyledComponentClass<{
    type: string;
} & React.HTMLProps<HTMLElement> & {
    className: string;
}, ResolvedThemeInterface, {
    type: string;
} & React.HTMLProps<HTMLElement>>;
export declare const MenuItemUl: StyledComponentClass<{
    active: boolean;
} & React.HTMLProps<HTMLElement>, ResolvedThemeInterface, {
    active: boolean;
} & React.HTMLProps<HTMLElement>>;
export declare const MenuItemLi: StyledComponentClass<{
    depth: number;
} & React.HTMLProps<HTMLElement>, ResolvedThemeInterface, {
    depth: number;
} & React.HTMLProps<HTMLElement>>;
export declare const menuItemDepth: {
    0: (string | number | false | Styles | StyledComponentClass<any, any, any> | InterpolationFunction<ThemeProps<ResolvedThemeInterface>> | null | undefined)[];
    1: (string | number | false | Styles | StyledComponentClass<any, any, any> | InterpolationFunction<ThemeProps<ResolvedThemeInterface>> | null | undefined)[];
    2: (string | number | false | Styles | StyledComponentClass<any, any, any> | InterpolationFunction<ThemeProps<ResolvedThemeInterface>> | null | undefined)[];
};
export declare const MenuItemLabel: StyledComponentClass<{
    depth: number;
    active: boolean;
    deprecated?: boolean | undefined;
    type?: string | undefined;
} & React.HTMLProps<HTMLElement> & {
    role: string;
    className: any;
}, ResolvedThemeInterface, {
    depth: number;
    active: boolean;
    deprecated?: boolean | undefined;
    type?: string | undefined;
} & React.HTMLProps<HTMLElement>>;
export declare const MenuItemTitle: StyledComponentClass<{
    width?: string | undefined;
} & React.HTMLProps<HTMLElement>, ResolvedThemeInterface, {
    width?: string | undefined;
} & React.HTMLProps<HTMLElement>>;
export declare const RedocAttribution: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ResolvedThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
