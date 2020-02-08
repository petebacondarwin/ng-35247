import {CommonModule} from "@angular/common";
import {
  NbAlertModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
  NbTabsetModule,
  NbThemeModule
} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MyIconModule} from "../icons/MyIconModule";
import {AgGridModule} from "ag-grid-angular";


export const producttestimports = [
  CommonModule,
  RouterTestingModule,
  NbCardModule,
  NbSelectModule,
  NbIconModule,
  MyIconModule,
  FormsModule,
  NbTabsetModule,
  NbLayoutModule,
  NbAlertModule,
  NbThemeModule.forRoot(),
  NbInputModule,
  AgGridModule,


];
