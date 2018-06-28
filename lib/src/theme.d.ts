declare const defaultTheme: ThemeInterface;
export default defaultTheme;
export declare function resolveTheme(theme: ThemeInterface): ResolvedThemeInterface;
export interface ResolvedThemeInterface {
    spacingUnit: number;
    breakpoints: {
        small: string;
        medium: string;
        large: string;
    };
    colors: {
        main: string;
        success: string;
        redirect: string;
        error: string;
        info: string;
        text: string;
        code: string;
        codeBg: string;
        warning: string;
        http: {
            get: string;
            post: string;
            put: string;
            options: string;
            patch: string;
            delete: string;
            basic: string;
            link: string;
            head: string;
        };
    };
    schemaView: {
        linesColor: string;
        defaultDetailsWidth: string;
        typeNameColor: string;
        typeTitleColor: string;
        requireLabelColor: string;
        nestingSpacing: string;
    };
    baseFont: {
        size: string;
        lineHeight: string;
        weight: string;
        family: string;
        smoothing: string;
        optimizeSpeed: boolean;
    };
    headingsFont: {
        family: string;
    };
    code: {
        fontSize: string;
        fontFamily: string;
    };
    links: {
        color: string;
        visited: string;
        hover: string;
    };
    menu: {
        width: string;
        backgroundColor: string;
        groupItems: {
            textTransform: string;
        };
        level1Items: {
            textTransform: string;
        };
    };
    logo: {
        maxHeight: string;
        maxWidth: string;
    };
    rightPanel: {
        backgroundColor: string;
        width: string;
    };
}
export declare type primitive = string | number | boolean | undefined | null;
export declare type AdvancedThemeDeep<T> = T extends primitive ? T | ((theme: ResolvedThemeInterface) => T) : AdvancedThemeObject<T>;
export declare type AdvancedThemeObject<T> = {
    [P in keyof T]?: AdvancedThemeDeep<T[P]>;
};
export declare type ThemeInterface = AdvancedThemeObject<ResolvedThemeInterface>;
