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
import { List148 } from './list148';
import { OCollectionIdentifier } from './oCollectionIdentifier';
import { OCollectionSequence } from './oCollectionSequence';
import { OContributor } from './oContributor';
import { OContributorStatement } from './oContributorStatement';
import { OTitleDetail } from './oTitleDetail';


export interface OCollection { 
    collectionType: List148;
    sourceName?: string;
    collectionIdentifiers?: Array<OCollectionIdentifier>;
    collectionSequences?: Array<OCollectionSequence>;
    titleDetails?: Array<OTitleDetail>;
    noContributor?: object;
    contributors?: Array<OContributor>;
    contributorStatements?: Array<OContributorStatement>;
}
