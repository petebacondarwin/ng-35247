import {Injectable, NgZone} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {NbAccessChecker} from "@nebular/security";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Injectable()
export class RoleGuard implements CanActivate /*, CanLoad*/{
  constructor(private checker: NbAccessChecker,
              private router: Router,
              private ngZone: NgZone) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    return this.checker.isGranted('view', route.routeConfig.path).pipe(
      tap( granted => {
        if(!granted){
          this.ngZone.run(()=>{
            this.router.navigate(['accessdenied']);
          })
        }
      }));

  }
  //
  // canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
  //   return this.checker.isGranted('view', route.path).pipe(
  //     tap( granted => {
  //       if(!granted){
  //         this.router.navigate(['accessdenied']);
  //       }
  //     }));
  //
  // }
}
