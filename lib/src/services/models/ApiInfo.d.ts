import { OpenAPIContact, OpenAPIInfo, OpenAPILicense } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocNormalizedOptions } from '../RedocNormalizedOptions';
export declare class ApiInfoModel implements OpenAPIInfo {
    private parser;
    private options;
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: OpenAPIContact;
    license?: OpenAPILicense;
    constructor(parser: OpenAPIParser, options: RedocNormalizedOptions);
    readonly downloadLink: string | undefined;
    readonly downloadFileName: string | undefined;
}
