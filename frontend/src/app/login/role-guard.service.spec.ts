import {async, getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NbAuthModule, NbAuthOAuth2JWTToken, NbAuthService, NbDummyAuthStrategy} from "@nebular/auth";
import {RoleGuard} from "./role-guard.service";
import {NbAccessChecker, NbRoleProvider, NbSecurityModule} from "@nebular/security";
import {RoleProvider} from "./role-provider";
import {ActivatedRouteSnapshot, Route} from "@angular/router";
import {of} from "rxjs";
import {AccessDeniedComponent} from "../errors/access-denied.component";
import {NbCardModule} from "@nebular/theme";

let roleGuard: RoleGuard;
let authService: NbAuthService;
describe('Role Guard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: 'accessdenied',
              component: AccessDeniedComponent,
            },
          ]),
        NbAuthModule.forRoot({
          strategies: [
            NbDummyAuthStrategy.setup({

              name: 'email',
              alwaysFail: false,
              token: {
                class: NbAuthOAuth2JWTToken
              }
            }),
          ]
        }),
        NbSecurityModule.forRoot({
          accessControl: {
            USER: {
              view: ['dashboard', 'user', 'user/profile'],
            },
            ADMIN: {
              parent: 'guest',
              view: ['user/list', 'user/create', 'user/edit/:email'],
            },

          },
        }),
        NbCardModule,
      ],
      declarations: [ AccessDeniedComponent ],
      providers: [
        NbAuthService,
        {
          provide: NbRoleProvider,
          useClass: RoleProvider
        },
        NbAccessChecker,
        RoleGuard,
      ]
    }).compileComponents();


  }));


  it('should allow accces to the dashboard', async () => {

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          sub: 'test@test.de',
          firstName: 'first1',
          lastName: 'last1',
          authorities: ['USER'],

        }
      },
      isValid(): boolean {
        return true;
      },
      getValue(): string {
        return ""
      }
    } as NbAuthOAuth2JWTToken))

    roleGuard = getTestBed().get(RoleGuard);
    expect(roleGuard).toBeTruthy();

    const route = new class extends ActivatedRouteSnapshot {
      routeConfig = new class implements Route {
        path: string
      };
    };
    route.routeConfig.path = "dashboard";
    const result = await roleGuard.canActivate(route).toPromise();
    expect(result).toBeTruthy()
  });


  it('should not allow accces to the dashboard', async () => {

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          sub: 'test@test.de',
          firstName: 'first1',
          lastName: 'last1',
          authorities: ['BLA'],

        }
      },
      isValid(): boolean {
        return true;
      },
      getValue(): string {
        return ""
      }
    } as NbAuthOAuth2JWTToken))

    roleGuard = getTestBed().get(RoleGuard);
    expect(roleGuard).toBeTruthy();

    const route = new class extends ActivatedRouteSnapshot {
      routeConfig = new class implements Route {
        path: string
      };
    };
    route.routeConfig.path = "dashboard";
    const result = await roleGuard.canActivate(route).toPromise();
    expect(result).toBeFalsy()
  });
});
