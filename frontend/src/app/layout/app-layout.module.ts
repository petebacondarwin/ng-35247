import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule
} from "@nebular/theme";
import {AppLayoutComponent} from "../layout/app-layout.component";
import {SidebarmenuComponent} from "../user-management/sidebarmenu/sidebarmenu.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppLayoutComponent, SidebarmenuComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbLayoutModule,
    NbUserModule,
    RouterModule,
    NbMenuModule,
    NbSidebarModule,
    NbContextMenuModule
  ],

})
export class AppLayoutModule {
}
