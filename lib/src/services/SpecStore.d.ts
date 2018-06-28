import { OpenAPIExternalDocumentation, OpenAPISpec } from '../types';
import { GroupModel, OperationModel } from './models/';
import { ApiInfoModel } from './models/ApiInfo';
import { SecuritySchemesModel } from './models/SecuritySchemes';
import { OpenAPIParser } from './OpenAPIParser';
import { RedocNormalizedOptions } from './RedocNormalizedOptions';
/**
 * Store that containts all the specification related information in the form of tree
 */
export declare class SpecStore {
    private options;
    parser: OpenAPIParser;
    constructor(spec: OpenAPISpec, specUrl: string | undefined, options: RedocNormalizedOptions);
    readonly info: ApiInfoModel;
    readonly externalDocs: OpenAPIExternalDocumentation | undefined;
    readonly operationGroups: (OperationModel | GroupModel)[];
    readonly securitySchemes: SecuritySchemesModel | undefined;
}
