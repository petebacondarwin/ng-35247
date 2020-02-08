import {RouterModule, Routes} from "@angular/router";
import {RoleGuard} from "../login/role-guard.service";
import {NgModule} from "@angular/core";
import {AppLayoutComponent} from "../layout/app-layout.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'product/list',
        component: ProductListComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'product/edit/:id',
        component: ProductEditComponent,
        canActivate: [RoleGuard],
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule {
}
