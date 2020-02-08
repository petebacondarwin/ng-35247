import {Injectable} from '@angular/core';


import {NbAuthOAuth2JWTToken, NbAuthService} from '@nebular/auth';
import {NbRoleProvider} from '@nebular/security';
import {Observable} from "rxjs";
import {flatMap, map} from "rxjs/operators";

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string> {

    return this.authService.isAuthenticatedOrRefresh()
      .pipe(flatMap((isauth: boolean) => {
        return this.authService.getToken()
          .pipe(
            map((token: NbAuthOAuth2JWTToken) => {
              return token.isValid() ? token.getAccessTokenPayload()['authorities'] : 'guest';
            })
          );
      }));
  }
}
