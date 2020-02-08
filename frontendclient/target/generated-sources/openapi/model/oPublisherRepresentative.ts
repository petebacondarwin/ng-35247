/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OWebsite } from './oWebsite';
import { OAgentIdentifier } from './oAgentIdentifier';
import { List69 } from './list69';


export interface OPublisherRepresentative { 
    agentRole: List69;
    agentIdentifiers?: Array<OAgentIdentifier>;
    agentName?: string;
    telephoneNumbers?: Array<string>;
    faxNumbers?: Array<string>;
    emailAddresses?: Array<string>;
    websites?: Array<OWebsite>;
}
