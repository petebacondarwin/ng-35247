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
import { List198 } from './list198';
import { OProductContactIdentifier } from './oProductContactIdentifier';


export interface OProductContact { 
    productContactRole: List198;
    productContactIdentifiers?: Array<OProductContactIdentifier>;
    productContactName?: string;
    contactName?: string;
    emailAddress?: string;
}

