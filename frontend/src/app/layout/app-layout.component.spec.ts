import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLayoutComponent} from './app-layout.component';
import {SidebarmenuComponent} from '../user-management/sidebarmenu/sidebarmenu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
  NbUserModule
} from "@nebular/theme";
import {NbAuthModule, NbAuthOAuth2JWTToken, NbAuthService, NbDummyAuthStrategy} from "@nebular/auth";
import {of} from "rxjs";
import {MyIconModule} from "../icons/MyIconModule";
import {By} from "@angular/platform-browser";
import {OnixProviderService} from "../product-management/onix-provider.service";
import {mockCodeList} from "../product-management/product-edit/onix-select/mock.onix-codes";

let authService: NbAuthService;
let app: AppLayoutComponent;
let fixture: ComponentFixture<AppLayoutComponent>;
let element: HTMLElement;



describe('AppLayoutComponent', () => {

  const mockOnixService: Partial<OnixProviderService> = {
    getCodeList: jasmine.createSpy().and.returnValue(of(mockCodeList))

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbLayoutModule,
        NbIconModule,
        MyIconModule,
        NbActionsModule,
        NbMenuModule.forRoot(),
        NbSidebarModule,
        NbUserModule,
        NbContextMenuModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
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
      ],
      declarations: [
        AppLayoutComponent,
        SidebarmenuComponent,
      ],
      providers: [
        NbMenuService,
        NbAuthService,
        NbSidebarService,
        {
          provide: OnixProviderService,
          useValue: mockOnixService
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponent);
    app = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement
  }));

  afterEach(() => {
    document.body.removeChild(element);
  });


  it('should show the users name', () => {

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          sub: 'test@test.de',
          firstName: 'first1',
          lastName: 'last1',
          authorities: ['BLA']
        }
      },
      isValid(): boolean {
        return true;
      }
    } as NbAuthOAuth2JWTToken))


    expect(app).toBeTruthy();
    fixture.detectChanges();

    const nameDiv = fixture.debugElement.query(By.css("div.user-name")).nativeElement
    expect(nameDiv.textContent).toEqual('first1 last1')
  });

});
