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
import { OSupplyContactIdentifier } from './oSupplyContactIdentifier';
import { List239 } from './list239';


export interface OSupplyContact { 
    supplyContactRole: List239;
    supplyContactIdentifiers?: Array<OSupplyContactIdentifier>;
    supplyContactName?: string;
    contactName?: string;
    emailAddress?: string;
}

