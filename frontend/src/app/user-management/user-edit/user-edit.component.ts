import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import {ActivatedRoute, Router} from "@angular/router";
import {UserService, UserWithPermissionsDTO} from '@eiswind/proto-client-api';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  form: FormGroup;

  roles: string[];

  sub: Subscription;

  email: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
  ) {

    this.form = this.fb.group({
      email: [{value: '', disabled: true}, [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      active: [false],
      permissions : [[]]
    });
  }


  ngOnInit() {
    this.userService.getUserRoles().subscribe(roles => this.roles = roles);
    this.sub = this.route.params.subscribe(params => {
      this.userService.findUserByEmail(params['email']).subscribe(dto => {
        this.form.reset(dto);
        this.email = dto.email;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {

    const user = this.form.value;

    user.email = this.email;


    const userDTO = user as UserWithPermissionsDTO;
    this.userService.updateUser(userDTO, 'response').subscribe(result => {
      if (result) {
        this.ngZone.run(()=>{
          this.router.navigate(['user/list'])
        })
      }
    })

  }
}



