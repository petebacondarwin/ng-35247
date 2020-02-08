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
import { List175 } from './list175';
import { List51 } from './list51';
import { OProductIdentifier } from './oProductIdentifier';
import { List150 } from './list150';


export interface ORelatedProduct { 
    productRelationCodes?: Array<List51>;
    productIdentifiers?: Array<OProductIdentifier>;
    productForm?: List150;
    productFormDetails?: Array<List175>;
}
