import { TabsProps } from 'react-tabs';
import { ResolvedThemeInterface, StyledComponentClass } from '../styled-components';
export { Tab, TabList, TabPanel } from 'react-tabs';
export declare const Tabs: StyledComponentClass<TabsProps, ResolvedThemeInterface, Pick<TabsProps, "className" | "onSelect" | "defaultFocus" | "defaultIndex" | "disabledTabClassName" | "forceRenderTabPanel" | "selectedIndex" | "selectedTabClassName" | "selectedTabPanelClassName"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
export declare const SmallTabs: StyledComponentClass<TabsProps, ResolvedThemeInterface, Pick<TabsProps, "className" | "onSelect" | "defaultFocus" | "defaultIndex" | "disabledTabClassName" | "forceRenderTabPanel" | "selectedIndex" | "selectedTabClassName" | "selectedTabPanelClassName"> & {
    theme?: ResolvedThemeInterface | undefined;
}>;
