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
import { List42 } from './list42';
import { OTextItemIdentifier } from './oTextItemIdentifier';
import { OPageRun } from './oPageRun';


export interface OTextItem { 
    textItemType: List42;
    textItemIdentifiers?: Array<OTextItemIdentifier>;
    pageRuns?: Array<OPageRun>;
    numberOfPages?: number;
}
