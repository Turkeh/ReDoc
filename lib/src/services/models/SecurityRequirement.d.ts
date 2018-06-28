import { OpenAPISecurityRequirement } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
export interface SecurityScheme {
    id: string;
    sectionId: string;
    type: string;
    scopes: string[];
}
export declare class SecurityRequirementModel {
    schemes: SecurityScheme[];
    constructor(requirement: OpenAPISecurityRequirement, parser: OpenAPIParser);
}
