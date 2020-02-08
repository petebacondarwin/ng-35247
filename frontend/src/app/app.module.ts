import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from "@angular/common/http";
import {AccessDeniedComponent} from "./errors/access-denied.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
  NbUserModule
} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserManagementModule} from "./user-management/user-management.module";
import {AppRoutingModule} from "./app-routing.module";
import {AgGridModule} from "ag-grid-angular";
import {
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbAuthJWTInterceptor,
  NbAuthModule,
  NbAuthOAuth2JWTToken,
  NbPasswordAuthStrategy
} from "@nebular/auth";
import {NbRoleProvider, NbSecurityModule} from "@nebular/security";
import {RoleProvider} from "./login/role-provider";
import {RoleGuard} from "./login/role-guard.service";
import {CommunicationErrorDialogComponent} from './errors/communication-error-dialog/communication-error-dialog.component';
import {HttpErrorInterceptor} from "./errors/http-error.interceptor";
import {MyIconModule} from "./icons/MyIconModule";
import {AppLayoutModule} from "./layout/app-layout.module";
import {ApiModule, BASE_PATH} from '@eiswind/proto-client-api';
import {ProductManagementModule} from "./product-management/product-management.module";


export function filterInterceptorRequest(req: HttpRequest<any>): boolean {
  return ['/api/auth', '/api/auth/refresh']
    .some(url => req.url.includes(url));
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccessDeniedComponent,
    CommunicationErrorDialogComponent,
  ],
  entryComponents: [
    CommunicationErrorDialogComponent,
  ],
  imports: [

    MyIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'eiswind'}),
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbIconModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserManagementModule,
    ProductManagementModule,
    AppLayoutModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/api/auth',
            redirect: {
              success: 'dashboard',
            },
            requireValidToken: true,

          },
          refreshToken: {
            endpoint: '/api/auth/refresh',
            requireValidToken: true,
            redirect: {
              success: 'dashboard',
            },
          },
          requestPass: {
            endpoint: '/api/auth/request-pass',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
          },
          resetPass: {
            endpoint: '/api/auth/reset-pass',
            method: 'put',
            redirect: {
              success: '/',
              failure: null,
            },
            resetPasswordTokenKey: 'token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been reset.'],
          },
          logout: {
            endpoint: '/api/auth/logout',
          },
          token: {
            class: NbAuthOAuth2JWTToken,
            key: 'token', // this parameter tells where to look for the token
          },
          messages: {
            key: 'message',
          }
        }),
      ],

      forms: {
        login: {
          redirectDelay: 100,
          showMessages: {
            success: true,
            error: true,
          },
          rememberMe: false,
          register: false,

        },
        register: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          redirectDelay: 10000,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          redirectDelay: 0,
        },
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        USER: {
          view: [
            'dashboard',
            'user',
            'user/profile',
            'product/list',
            'product/edit/:id'
          ],
        },
        ADMIN: {
          parent: 'guest',
          view: ['user/list', 'user/create', 'user/edit/:email'],
        },

      },
    }),
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    HttpClientModule,
    ApiModule,


  ],
  providers: [
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: filterInterceptorRequest
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthJWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    NbSidebarService,
    RoleGuard,
    {
      provide: NbRoleProvider,
      useClass: RoleProvider
    },
    {
      provide: BASE_PATH,
      useValue: " "
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
