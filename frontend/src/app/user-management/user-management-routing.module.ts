import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component";
import {RoleGuard} from "../login/role-guard.service";
import {UserCreateComponent} from "./user-create/user-create.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {NgModule} from "@angular/core";
import {AppLayoutComponent} from "../layout/app-layout.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";


const routes: Routes = [

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'user/list',
        component: UserListComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'user/create',
        component: UserCreateComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'user/edit/:email',
        component: UserEditComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'user/profile',
        component: UserProfileComponent,
        canActivate: [RoleGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
