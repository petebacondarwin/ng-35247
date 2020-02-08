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
import { List20 } from './list20';
import { OWebsite } from './oWebsite';
import { OEventSponsor } from './oEventSponsor';


export interface OEvent { 
    eventRole: List20;
    eventNames?: Array<string>;
    eventAcronyms?: Array<string>;
    eventNumber?: number;
    eventThemes?: Array<string>;
    eventDate?: string;
    eventPlaces?: Array<string>;
    eventSponsors?: Array<OEventSponsor>;
    websites?: Array<OWebsite>;
}

