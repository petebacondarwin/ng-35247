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
import { OFeatureNote } from './oFeatureNote';
import { List162 } from './list162';


export interface OResourceVersionFeature { 
    resourceVersionFeatureType: List162;
    featureValue?: string;
    featureNotes?: Array<OFeatureNote>;
}
