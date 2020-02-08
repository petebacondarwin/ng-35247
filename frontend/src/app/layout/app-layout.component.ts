import {Component, OnDestroy, OnInit} from '@angular/core';

import {NbAuthOAuth2JWTToken, NbAuthService} from "@nebular/auth";
import {NbMenuItem, NbMenuService} from "@nebular/theme";
import {UserDTO} from '@eiswind/proto-client-api';
import {OnixProviderService} from "../product-management/onix-provider.service";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit, OnDestroy {

  profileLabel: string;
  user: Partial<UserDTO> = {};
  userMenu: NbMenuItem[] = [];
  onixProfileMenu: NbMenuItem[] = [];
  private authSubscription: Subscription;
  private menuSubscription: Subscription;

  constructor(
    private authService: NbAuthService,
    private menuService: NbMenuService,
    private onixProviderService: OnixProviderService
  ) {

    this.profileLabel = this.onixProviderService.profile ? this.onixProviderService.profile.toUpperCase():"";
    const profileItem = new NbMenuItem();
    profileItem.title = 'Profile';
    profileItem.url = 'user/profile';
    profileItem.icon = 'user_monitor';
    this.userMenu.push(profileItem);

    const logout = new NbMenuItem();
    logout.title = 'Logout';
    logout.url = 'auth/logout';
    logout.icon = 'log_out';

    this.userMenu.push(logout);

    const vlbProfile = new NbMenuItem();
    vlbProfile.title = "VLB Onix Profile";
    vlbProfile.data = 'vlb';
    this.onixProfileMenu.push(vlbProfile);

    const fullProfile = new NbMenuItem();
    fullProfile.title = "Full Onix Profile";
    fullProfile.data = 'full';
    this.onixProfileMenu.push(fullProfile);

    this.menuSubscription = this.menuService.onItemClick().pipe(
      filter(bag => {
        return bag.tag == 'onixprofile'
      })
    ).subscribe(bag => {
      if (bag != null && bag.item != null && bag.item.data != null) {
        this.profileLabel = bag.item.data.toUpperCase();
        this.onixProviderService.profile = bag.item.data
      }
    });
  }

  ngOnInit() {

    this.authSubscription = this.authService.getToken()
      .subscribe(token => {
        const t = token as NbAuthOAuth2JWTToken;
        this.user.firstName = t.getAccessTokenPayload()["firstName"];
        this.user.lastName = t.getAccessTokenPayload()["lastName"];
      })
  }

  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }
}
