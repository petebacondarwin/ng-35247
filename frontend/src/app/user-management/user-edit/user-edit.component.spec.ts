import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';

import {UserEditComponent} from './user-edit.component';
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


describe('UserEditComponent', () => {

  const testUser = {
    permissions: [],
    active: true,
    firstName: 'first1',
    lastName: 'last1',
    email: 'test@test.de',
  }

  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditComponent, AccessDeniedComponent],
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

            updateUser= jasmine.createSpy('updateUser').and.returnValue(of(new HttpResponse({status:200})))

            findUserByEmail = jasmine.createSpy('findUserByEmail').and.returnValue(of(testUser))
          }
        },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should update the user', fakeAsync(() => {
    const firstelement = fixture.debugElement.query(By.css("input[name='firstName']")).nativeElement;
    expect(firstelement.value).toBe('first1');
    firstelement.value = 'first';
    firstelement.dispatchEvent(new Event('input'));

    const lastelement = fixture.debugElement.query(By.css("input[name='lastName']")).nativeElement;
    expect(lastelement.value).toBe('last1');
    lastelement.value = 'last';
    lastelement.dispatchEvent(new Event('input'));

    const activeelement = fixture.debugElement.query(By.css("nb-checkbox[name='active'] input[type='checkbox']")).nativeElement;
    expect(activeelement.value).toBeTruthy();
    activeelement.click()
    activeelement.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges()
    const buttonelement = fixture.debugElement.query(By.css("button[type='submit']"));
    buttonelement.triggerEventHandler('click', null);
   // TODO select role
    tick();
    fixture.detectChanges();
    const checkUser = {
      permissions: [],
      active: false,
      firstName: 'first',
      lastName: 'last',
      email: 'test@test.de',
    };

    const mockUserService = getTestBed().get(UserService) as UserService;
    expect(mockUserService.updateUser).toHaveBeenCalledWith(checkUser, 'response');

    const location = getTestBed().get(Location);
    expect(location.path()).toBe('/user/list');

  }));
});
