import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {UserListComponent} from './user-list.component';

import {of} from 'rxjs';

import {By} from '@angular/platform-browser';
import {AgGridModule} from "ag-grid-angular";
import {NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {MyIconModule} from "../../icons/MyIconModule";
import {AccessDeniedComponent} from "../../errors/access-denied.component";
import {Location} from "@angular/common";
import {UserDTO, UserService} from '@eiswind/proto-client-api';

describe('UserListComponent edit', () => {

  @Component({
    selector: 'user-list-test',
    template: `
      <nb-layout>
        <nb-layout-column>
          <app-user-list></app-user-list>
        </nb-layout-column>
      </nb-layout>
    `,
  })
  class UserListTestComponent {

  }

  let component: UserListTestComponent;
  let fixture: ComponentFixture<UserListTestComponent>;

  const mockUser: UserDTO = {
    email: 'test@test.com',
    firstName: 'first',
    lastName: 'last',
    active: true,
  };

  const mockUserService = {
    findAllUsers: jasmine.createSpy('findAllUsers')
      .and.returnValue(of([mockUser])),

  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserListTestComponent,UserListComponent, AccessDeniedComponent],
      imports: [
        AgGridModule.withComponents([]),
        NbCardModule,
        NbIconModule,
        NbLayoutModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
        MyIconModule,
        NbDialogModule.forRoot(),
        RouterTestingModule.withRoutes([
          {
            path: 'user/edit/:id',
            component: AccessDeniedComponent,
          },
        ]),
      ],
      providers: [
        {provide: UserService, useValue: mockUserService},
      ],

    });


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTestComponent);
    component = fixture.componentInstance;
  });


  it('should edit the user ', async(() => {
    const debugElement = fixture.debugElement;
    const tableElement = fixture.debugElement;
    fixture.detectChanges();
    const grid = tableElement.query(By.css('ag-grid-angular')).nativeElement as HTMLBaseElement;
    const email = grid.querySelector('div.ag-cell-value[col-id="email"]') as HTMLBaseElement;
    email.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      debugElement.query(By.css("button[name='edit']")).triggerEventHandler('click', null);
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const location = getTestBed().get(Location);
        expect(location.path()).toBe('/user/edit/test@test.com');
      })
    })
  }));

});
