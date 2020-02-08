import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';

import {UserProfileComponent} from './user-profile.component';
import {NbCardModule, NbIconModule, NbInputModule, NbThemeModule} from "@nebular/theme";
import {MyIconModule} from "../../icons/MyIconModule";
import {ReactiveFormsModule} from "@angular/forms";
import {NbAuthModule, NbAuthOAuth2JWTToken, NbAuthService, NbDummyAuthStrategy} from "@nebular/auth";
import {of} from "rxjs";

import {HttpResponse} from "@angular/common/http";
import {By} from "@angular/platform-browser";
import {UserService} from '@eiswind/proto-client-api';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authService: NbAuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
        MyIconModule,
        ReactiveFormsModule,
        NbAuthModule.forRoot({
          strategies: [
            NbDummyAuthStrategy.setup({

              name: 'email',
              alwaysFail: false,
              token: {
                class: NbAuthOAuth2JWTToken
              }
            }),
          ],

        }),

      ],
      providers: [
        {
          provide: UserService, useClass: class {
            updateUserProfile = jasmine.createSpy('updateUserProfile')
              .and.returnValue(of(new HttpResponse({status: 200})));
          }
        },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;

    authService = getTestBed().get(NbAuthService);
    spyOn(authService, 'getToken').and.returnValue(of({
      getAccessTokenPayload: () => {
        return {
          sub: 'test@test.de',
        }
      },
      isValid(): boolean {
        return true;
      }
    } as NbAuthOAuth2JWTToken));

    fixture.detectChanges();

  });

  it('should show the password length validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    inputelement.value = "1234"
    inputelement.dispatchEvent(new Event('input'))
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Must be at least 8 chars!");
    })
  }));

  it('should show the old password length validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='passwordOld']")).nativeElement;
    inputelement.value = "1234"
    inputelement.dispatchEvent(new Event('input'))
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Must be at least 8 chars!");
    })
  }));

  it('should show the password match validation message', async(() => {
    const inputelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    const matchelement = fixture.debugElement.query(By.css("input[name='passwordConfirm']")).nativeElement;
    inputelement.value = "12345678";
    matchelement.value = "1234567";
    inputelement.dispatchEvent(new Event('input'))
    matchelement.dispatchEvent(new Event('input'))
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Password must match!");
    })
  }));


  it('should update the password', fakeAsync(() => {

    const oldpasselement = fixture.debugElement.query(By.css("input[name='passwordOld']")).nativeElement;
    oldpasselement.value = '00000000';
    oldpasselement.dispatchEvent(new Event('input'))


    const passelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    passelement.value = '12345678';
    passelement.dispatchEvent(new Event('input'))

    const matchelement = fixture.debugElement.query(By.css("input[name='passwordConfirm']")).nativeElement;
    matchelement.value = '12345678';
    matchelement.dispatchEvent(new Event('input'))

    tick()
    fixture.detectChanges()

    const buttonelement = fixture.debugElement.query(By.css("button[type='submit']"));
    buttonelement.triggerEventHandler('click', null)

    tick()
    fixture.detectChanges()
    const checkUser = {
      passwordOld: '00000000',
      password: '12345678',
      passwordConfirm: '12345678',
      email: 'test@test.de',
    };

    const mockUserService = getTestBed().get(UserService) as UserService;
    expect(mockUserService.updateUserProfile).toHaveBeenCalledWith(checkUser)


  }));
});
