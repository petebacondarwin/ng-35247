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
import { List240 } from './list240';
import { OAVItemIdentifier } from './oAVItemIdentifier';
import { OTimeRun } from './oTimeRun';


export interface OAVItem { 
    avItemType: List240;
    avItemIdentifier?: Array<OAVItemIdentifier>;
    timeRuns?: Array<OTimeRun>;
    avDuration?: string;
}
