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
import { List41 } from './list41';
import { OPrizeStatement } from './oPrizeStatement';
import { OPrizeJury } from './oPrizeJury';
import { List91 } from './list91';
import { List49 } from './list49';


export interface OPrize { 
    prizeNames?: Array<string>;
    prizeYear?: string;
    prizeCountry?: List91;
    prizeRegion?: List49;
    prizeCode?: List41;
    prizeStatements?: Array<OPrizeStatement>;
    prizeJuries?: Array<OPrizeJury>;
}

