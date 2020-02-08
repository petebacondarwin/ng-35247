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
import { OProductFormFeature } from './oProductFormFeature';
import { List81 } from './list81';
import { List80 } from './list80';
import { List91 } from './list91';
import { OMeasure } from './oMeasure';
import { OProductIdentifier } from './oProductIdentifier';
import { List150 } from './list150';


export interface OProductPart { 
    primaryPart?: object;
    productIdentifiers?: Array<OProductIdentifier>;
    productForm: List150;
    productFormDetails?: Array<List175>;
    productFormFeatures?: Array<OProductFormFeature>;
    productPackaging?: List80;
    productFormDescriptions?: Array<string>;
    productContentTypes?: Array<List81>;
    measures?: Array<OMeasure>;
    numberOfItemsOfThisForm?: number;
    numberOfCopies?: number;
    countryOfManufacture?: List91;
}
