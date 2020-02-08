import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppLayoutComponent} from "./layout/app-layout.component";
import {AccessDeniedComponent} from "./errors/access-denied.component";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from "@nebular/auth";
import {RoleGuard} from "./login/role-guard.service";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RoleGuard],
      },


      //
      {
        path: 'accessdenied',
        component: AccessDeniedComponent,
      },

    ]
  },


  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: 'user',
    loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-management.module').then(mod => mod.ProductManagementModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
