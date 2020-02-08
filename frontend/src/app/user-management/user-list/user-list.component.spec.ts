import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserListComponent} from './user-list.component';

import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {AgGridModule} from "ag-grid-angular";
import {NbCardModule, NbDialogModule, NbIconModule, NbOverlayModule, NbThemeModule} from "@nebular/theme";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {MyIconModule} from "../../icons/MyIconModule";
import {RouterTestingModule} from "@angular/router/testing";
import {AccessDeniedComponent} from "../../errors/access-denied.component";
import {UserDTO, UserService} from '@eiswind/proto-client-api';


describe('UserListComponent', () => {

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  const mockUser: UserDTO = {
    email: 'test@test.com',
    firstName: 'first',
    lastName: 'last',
    active: true,
  };

  const mockUserService = {
    findAllUsers: jasmine.createSpy('findAllUsers')
      .and.returnValue(of([mockUser])),

    deleteUserById: jasmine.createSpy('deleteUserById').and.returnValue(of({}))
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, ConfirmDialogComponent, AccessDeniedComponent],
      imports: [
        AgGridModule.withComponents([]),
        NbCardModule,
        NbIconModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
        MyIconModule,
        NbDialogModule.forRoot(),
        NbOverlayModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
            {
              path: 'edituser',
              component: AccessDeniedComponent,
              data: {menu: false, expectedRole: 'ADMIN'}
            },
          ]
        ),

      ],
      providers: [
        {provide: UserService, useValue: mockUserService}
      ],

    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          ConfirmDialogComponent
        ]
      }
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });


  it('should render the user data', () => {
    const tableElement = fixture.debugElement;


    fixture.detectChanges()
    const grid = tableElement.query(By.css('ag-grid-angular')).nativeElement as HTMLBaseElement
    const email = grid.querySelector('div.ag-cell-value[col-id="email"]')
    expect(email.textContent).toBe('test@test.com');

    const firstName = grid.querySelector('div.ag-cell-value[col-id="firstName"]')
    expect(firstName.textContent).toBe('first');

    const lastName = grid.querySelector('div.ag-cell-value[col-id="lastName"]')
    expect(lastName.textContent).toBe('last');

    const active = grid.querySelector('div.ag-cell-value[col-id="active"]')
    expect(active.textContent).toBe('true');


    //

  });

  it('should select the user ', async (done) => {
    const tableElement = fixture.debugElement;
    fixture.detectChanges();
    const grid = tableElement.query(By.css('ag-grid-angular')).nativeElement as HTMLBaseElement
    const email = grid.querySelector('div.ag-cell-value[col-id="email"]') as HTMLBaseElement
    email.click();

    fixture.whenStable().then(() => {
      expect(component.selectedUser).toEqual(mockUser);
      done();
    });
  });

  it('should de-select the user ', async (done) => {
    const tableElement = fixture.debugElement;
    fixture.detectChanges();
    const gridElement = tableElement.query(By.css('ag-grid-angular'));
    const grid = gridElement.nativeElement as HTMLBaseElement;

    const email = grid.querySelector('div.ag-cell-value[col-id="email"]') as HTMLBaseElement;
    email.click();

    fixture.detectChanges();

    email.dispatchEvent(new MouseEvent('click', {ctrlKey: true, button: 1, bubbles:true}));

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.selectedUser).toBeNull();
      done();
    })
  });


});
