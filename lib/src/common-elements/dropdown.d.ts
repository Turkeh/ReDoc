import * as React from 'react';
import { ResolvedThemeInterface, StyledComponentClass } from '../styled-components';
export interface DropdownOption {
    label: string;
    value: string;
}
export interface DropdownProps {
    options: DropdownOption[];
    value: DropdownOption;
    onChange: (val: DropdownOption) => void;
}
export declare const StyledDropdown: StyledComponentClass<any, DropdownProps, any>;
export declare const SimpleDropdown: StyledComponentClass<any, DropdownProps, any>;
export declare const MimeLabel: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ResolvedThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
