import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserListComponent} from './user-list/user-list.component';
import {AgGridModule} from "ag-grid-angular";
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from "@nebular/theme";
import {UserCreateComponent} from './user-create/user-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserManagementRoutingModule} from "./user-management-routing.module";
import {AppLayoutModule} from "../layout/app-layout.module";
import {UserProfileComponent} from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    ConfirmDialogComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbIconModule,
    RouterModule,
    NbDialogModule.forRoot(),
    UserManagementRoutingModule,
    AppLayoutModule,

  ],

  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class UserManagementModule {
}
