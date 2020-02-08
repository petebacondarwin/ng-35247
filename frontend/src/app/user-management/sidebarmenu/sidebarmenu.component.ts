import {Component, OnInit} from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import {NbAuthOAuth2JWTToken, NbAuthService} from "@nebular/auth";


@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss'],
})
export class SidebarmenuComponent implements OnInit {

  model: NbMenuItem[] = [];


  constructor(
    private authService: NbAuthService
  ) {
  }

  ngOnInit() {

    this.authService.getToken().subscribe((token: NbAuthOAuth2JWTToken) => {
      const authorities = token.getAccessTokenPayload().authorities as string [];

      this.createModel(authorities);


    })

  }


  private createModel(authorities: string[]) {

    if (authorities.indexOf('USER') >= 0) {
      const dash = new NbMenuItem();
      dash.title = 'Dashboard';
      dash.icon = 'home';
      dash.url = 'dashboard';
      this.model.push(dash);

      const product = new NbMenuItem();
      product.title = 'Books';
      product.icon = 'book_open';
      product.url = 'product/list';
      this.model.push(product);
    }

    if (authorities.indexOf('ADMIN') >= 0) {
      const users = new NbMenuItem();
      users.title = 'Users';
      users.icon = 'users3';
      users.url = 'user/list';
      this.model.push(users)
    }
  }
}
