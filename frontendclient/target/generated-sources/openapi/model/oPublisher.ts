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
import { List45 } from './list45';
import { OWebsite } from './oWebsite';
import { OPublisherIdentifier } from './oPublisherIdentifier';
import { OFunding } from './oFunding';


export interface OPublisher { 
    publishingRole: List45;
    publisherIdentifiers?: Array<OPublisherIdentifier>;
    publisherName?: string;
    fundings?: Array<OFunding>;
    websites?: Array<OWebsite>;
}

