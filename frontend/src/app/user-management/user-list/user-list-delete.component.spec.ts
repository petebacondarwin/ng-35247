import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {UserListComponent} from './user-list.component';

import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {AgGridModule} from "ag-grid-angular";
import {NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {Component} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {OverlayContainer} from "@angular/cdk/overlay";
import {MyIconModule} from "../../icons/MyIconModule";
import {UserDTO, UserService} from '@eiswind/proto-client-api';

describe('UserListComponent delete', () => {

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
    deleteUserById: jasmine.createSpy('deleteUserById').and.returnValue(of({}))

  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserListTestComponent,UserListComponent, ConfirmDialogComponent],
      imports: [
        AgGridModule.withComponents([]),
        NbCardModule,
        NbIconModule,
        NbLayoutModule,
        NbThemeModule.forRoot({name: 'eiswind'}),
        MyIconModule,
        NbDialogModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {provide: UserService, useValue: mockUserService},
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
    fixture = TestBed.createComponent(UserListTestComponent);
    component = fixture.componentInstance;
  });


  it('should delete the user ', async(() => {
    const debugElement = fixture.debugElement;
    const tableElement = fixture.debugElement;
    fixture.detectChanges()
    const grid = tableElement.query(By.css('ag-grid-angular')).nativeElement as HTMLBaseElement
    const email = grid.querySelector('div.ag-cell-value[col-id="email"]') as HTMLBaseElement
    email.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      debugElement.query(By.css("button[name='delete']")).triggerEventHandler('click', null)
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const container = getTestBed().get(OverlayContainer) as OverlayContainer
        const button = container.getContainerElement().querySelector("button[status='success']") as HTMLElement
        button.click();
        fixture.whenStable().then(() => {
          expect(mockUserService.deleteUserById).toHaveBeenCalled()
        })
      })
    })
  }));

});
