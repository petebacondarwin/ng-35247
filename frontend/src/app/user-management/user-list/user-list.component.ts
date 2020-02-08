import {Component, NgZone, OnInit} from '@angular/core';

import {RowEvent} from "ag-grid-community";
import {NbDialogService} from "@nebular/theme";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserDTO, UserService} from '@eiswind/proto-client-api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users: Observable<UserDTO[]>;
  selectedUser: UserDTO;


  columnDefs = [
    {headerName: 'Email', field: 'email'},
    {headerName: 'Firstname', field: 'firstName'},
    {headerName: 'Lastname', field: 'lastName'},
    {headerName: 'Active', field: 'active'},

  ];


  constructor(private service: UserService,
              private dialogService: NbDialogService,
              private router: Router,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    // @ts-ignore
    this.users = this.service.findAllUsers()
  }

  onSelectionChanged(event: RowEvent) {
    const selection = event.api.getSelectedRows() as UserDTO[];
    if (selection.length > 0) {
      this.selectedUser = selection[0];
    } else {
      this.selectedUser = null;
    }
  }

  delete() {
    if (this.selectedUser == null) {
      return
    }
    this.dialogService.open(ConfirmDialogComponent).onClose.subscribe(data => {
      if (data === 'ok') {
        this.service.deleteUserById(this.selectedUser.email).subscribe(resp => {
          this.ngOnInit()
        })
      }
    })
  }

  edit() {
    if (this.selectedUser == null) {
      return
    }
    this.ngZone.run(() => {
      this.router.navigate(['/user/edit', this.selectedUser.email]);
    })

  }
}
