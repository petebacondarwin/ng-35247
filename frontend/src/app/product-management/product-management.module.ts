import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductManagementRoutingModule} from "./product-management-routing.module";
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {AppLayoutModule} from "../layout/app-layout.module";
import {RouterModule} from "@angular/router";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule
} from "@nebular/theme";

import {DescriptiveDetailComponent} from './product-edit/descriptive-detail/descriptive-detail.component';


import {FormsModule} from "@angular/forms";
import {OnixSelectComponent} from './product-edit/onix-select/onix-select.component';

import {AgGridModule} from "ag-grid-angular";
import {TitleDetailComponent} from './product-edit/descriptive-detail/title-detail/title-detail.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    DescriptiveDetailComponent,
    OnixSelectComponent,
    TitleDetailComponent,

  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    AppLayoutModule,
    RouterModule,
    NbCardModule,
    NbIconModule,
    FormsModule,
    NbTabsetModule,
    NbSelectModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    AgGridModule,
    NbTooltipModule
  ]
})
export class ProductManagementModule {
}
