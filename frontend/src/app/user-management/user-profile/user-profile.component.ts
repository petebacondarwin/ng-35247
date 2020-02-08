import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../user-create/user-create.component";

import {NbAuthOAuth2JWTToken, NbAuthService} from "@nebular/auth";
import {UserProfileDTO, UserService} from '@eiswind/proto-client-api';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup;

  username: string;

  statusText = "";

  constructor(
    private fb: FormBuilder,
    private authService: NbAuthService,
    private userService: UserService,
  ) {

    this.form = this.fb.group({
      passwordOld: ['', Validators.minLength(8)],
      password: ['', Validators.minLength(8)],
      passwordConfirm: ['', Validators.required],
    }, {
      validators: passwordMatchValidator,
    });
  }

  ngOnInit() {
    this.authService.getToken()
      .subscribe(token => {
        const t = token as NbAuthOAuth2JWTToken;
        this.username = t.getAccessTokenPayload()["sub"];
      })
  }


  get password() {
    return this.form.get('password')
  }

  get passwordOld() {
    return this.form.get('passwordOld')
  }


  update() {

    const user = this.form.value as UserProfileDTO;
    user.email = this.username;
    this.userService.updateUserProfile(user).subscribe(resp => {
        if (resp.status == 200) {
          this.statusText = "Profile update successful."
        } else {
          this.statusText = "Profile update failed."
        }
        this.form.reset()
      }
    )
  }
}
