import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {SidebarmenuComponent} from './sidebarmenu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {AccessDeniedComponent} from "../../errors/access-denied.component";
import {By} from "@angular/platform-browser";
import {NbCardModule, NbIconModule, NbMenuModule, NbThemeModule} from "@nebular/theme";
import {RoleGuard} from "../../login/role-guard.service";
import {NbAuthModule, NbAuthOAuth2JWTToken, NbAuthService, NbDummyAuthStrategy} from "@nebular/auth";
import {of} from "rxjs";
import {MyIconModule} from "../../icons/MyIconModule";

describe('SidebarmenuComponent', () => {
  let component: SidebarmenuComponent;
  let fixture: ComponentFixture<SidebarmenuComponent>;
  let authService: NbAuthService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: 'dash',
              component: AccessDeniedComponent,
              data: { expectedRole: 'USER'}
            },

          ]
        ),
        HttpClientTestingModule,
        NbIconModule,
        NbMenuModule.forRoot(),
        NbCardModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
        MyIconModule,
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
        })
      ],
      declarations: [
        SidebarmenuComponent,
        AccessDeniedComponent,
      ],
      providers: [
        RoleGuard,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidebarmenuComponent);
    component = fixture.componentInstance;
  }));


  it('should show dash and user', () => {

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          authorities: ['ADMIN','USER'],
        }
      }
    } as NbAuthOAuth2JWTToken));

     fixture.detectChanges();

    const menuElement = fixture.debugElement;
    const items = menuElement.queryAll(By.css('span.menu-title'));
    expect(items.length).toBe(3);
    expect(items[0].nativeElement.textContent.trim()).toBe("Dashboard");
    expect(items[1].nativeElement.textContent.trim()).toBe("Books");
    expect(items[2].nativeElement.textContent.trim()).toBe("Users");
  });


  it('should show dash and books only', () => {

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          authorities: ['USER'],
        }
      }
    } as NbAuthOAuth2JWTToken));

    fixture = TestBed.createComponent(SidebarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const menuElement = fixture.debugElement;
    const items = menuElement.queryAll(By.css('span.menu-title'));
    expect(items.length).toBe(2);
    expect(items[0].nativeElement.textContent.trim()).toBe("Dashboard")
    expect(items[1].nativeElement.textContent.trim()).toBe("Books")


  });
});
