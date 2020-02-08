import {Component, NgZone, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Observable, timer} from "rxjs";
import {first, map, switchMap} from "rxjs/operators";

import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {User, UserService} from '@eiswind/proto-client-api';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;

  roles: string[];


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ngZone: NgZone,
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.checkUserExists.bind(this)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      active: [false],
      permissions: [[]],
      password: ['', Validators.minLength(8)],
      passwordConfirm: ['', Validators.required],
    }, {
      validators: passwordMatchValidator,
    });
  }

  checkUserExists(control: AbstractControl): Observable<ValidationErrors> {
    return control &&
      timer(500).pipe(
        switchMap(() =>
          this.userService.checkUserExistsByEmail(control.value, 'response')
            .pipe(
              //@ts-ignore:
              map((response: HttpResponse<any>) => {
                  return response.status === 200 ? {userExists: true} : null
                }),
              first()
            )
        )
      );


  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm')
  }

  ngOnInit() {
    this.userService.getUserRoles().subscribe(roles => this.roles = roles)
  }

  save() {

    const user = this.form.value;
    delete user.passwordConfirm;

    const userDTO = user as User;
    this.userService.insertUser(userDTO, 'response').subscribe(result => {
      if (result) {
        this.ngZone.run(() => {
          this.router.navigate(['user/list'])
        })
      }
    })

  }
}

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password');
  const confirm = control.get('passwordConfirm');

  return pass && !(pass.value === confirm.value) ? {'passwordMustMatch': true} : null;
};


