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
import { List91 } from './list91';
import { List49 } from './list49';
import { List151 } from './list151';


export interface OContributorPlace { 
    contributorPlaceRelator: List151;
    countryCode?: List91;
    regionCode?: List49;
    locationNames?: Array<string>;
}

