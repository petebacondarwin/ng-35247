import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';

import {UserCreateComponent} from './user-create.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbSelectModule,
  NbThemeModule
} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {AccessDeniedComponent} from "../../errors/access-denied.component";
import {Location} from "@angular/common";
import {HttpResponse} from "@angular/common/http";
import {UserService} from '@eiswind/proto-client-api';


describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateComponent, AccessDeniedComponent],
      imports: [
        NbCardModule,
        FormsModule,
        ReactiveFormsModule,
        NbCheckboxModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        NbThemeModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
            {
              path: 'user/list',
              component: AccessDeniedComponent,
              data: {menu: true, label: 'USERS', icon: 'home', expectedRole: 'ADMIN'}
            },
          ]
        ),

      ],
      providers: [
        {
          provide: UserService, useClass: class {
            getUserRoles = jasmine.createSpy('getUserRoles')
              .and.returnValue(of(['ADMIN', 'USER']));

            checkUserExistsByEmail = jasmine.createSpy('checkUserExistsByEmail')
              .and.callFake((email) => {
                return of((email === 'demo@eiswind.de' ? new HttpResponse({status: 200}) : new HttpResponse({status: 404})));
              });

            insertUser = jasmine.createSpy('insertUser').and.returnValue(of(new HttpResponse({status: 201})))
          }
        },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show email validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='email']")).nativeElement;
    inputelement.value = "demo";
    inputelement.dispatchEvent(new Event('input'))
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Must be a valid email!");

    })
  }));

  it('should show user exists validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='email']")).nativeElement;
    inputelement.value = "demo@eiswind.de";
    inputelement.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("User already exists!");

    })
  }));

  it('should show no email validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='email']")).nativeElement;
    inputelement.value = "test@eiswind.de";
    inputelement.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger"))).toBeNull();

    })
  }));

  it('should show the password length validation message', async(() => {
    let inputelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    inputelement.value = "1234";
    inputelement.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Must be at least 8 chars!");

    })
  }));

  it('should show the password match validation message', async(() => {
    const inputelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    const matchelement = fixture.debugElement.query(By.css("input[name='passwordConfirm']")).nativeElement;
    inputelement.value = "12345678";
    matchelement.value = "1234567";
    inputelement.dispatchEvent(new Event('input'));
    matchelement.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger")).nativeElement.textContent).toBe("Password must match!");

    })
  }));

  it('should not show the password match validation message', async(() => {
    const inputelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    const matchelement = fixture.debugElement.query(By.css("input[name='passwordConfirm']")).nativeElement;
    inputelement.value = "12345678";
    matchelement.value = "12345678";
    inputelement.dispatchEvent(new Event('input'));
    matchelement.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("p.danger"))).toBeNull();

    })
  }));


  it('should save the user', fakeAsync(() => {

    const emailelement = fixture.debugElement.query(By.css("input[name='email']")).nativeElement;
    emailelement.value = 'test@test.de';
    emailelement.dispatchEvent(new Event('input'));
    tick(600); // respect the debounce
    const firstelement = fixture.debugElement.query(By.css("input[name='firstName']")).nativeElement;
    firstelement.value = 'first';
    firstelement.dispatchEvent(new Event('input'));

    const lastelement = fixture.debugElement.query(By.css("input[name='lastName']")).nativeElement;
    lastelement.value = 'last';
    lastelement.dispatchEvent(new Event('input'));

    const activeelement = fixture.debugElement.query(By.css("nb-checkbox[name='active'] input[type='checkbox']")).nativeElement;
    activeelement.click();
    activeelement.dispatchEvent(new Event('input'));

    const passelement = fixture.debugElement.query(By.css("input[name='password']")).nativeElement;
    passelement.value = '12345678';
    passelement.dispatchEvent(new Event('input'));

    const matchelement = fixture.debugElement.query(By.css("input[name='passwordConfirm']")).nativeElement;
    matchelement.value = '12345678';
    matchelement.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();
  // TODO set permissions
    const buttonelement = fixture.debugElement.query(By.css("button[type='submit']"));
    buttonelement.triggerEventHandler('click', null);

    tick();
    fixture.detectChanges();
    const checkUser = {
      permissions: [],
      active: true,
      password: '12345678',
      firstName: 'first',
      lastName: 'last',
      email: 'test@test.de',
    };

    const mockUserService = getTestBed().get(UserService) as UserService;
    expect(mockUserService.insertUser).toHaveBeenCalledWith(checkUser, 'response');

    const location = getTestBed().get(Location);
    expect(location.path()).toBe('/user/list');

  }));
});
