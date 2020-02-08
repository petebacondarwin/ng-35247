import {Injectable} from '@angular/core';
import {OnixCodeList, OnixCodeResult, OnixCodeService} from '@eiswind/proto-client-api';
import {BehaviorSubject, Observable} from "rxjs";
import {flatMap, map, shareReplay} from "rxjs/operators";

class OnixCache {
  full: Observable<OnixCodeResult>;
  vlb: Observable<OnixCodeResult>;
};

@Injectable({
  providedIn: 'root'
})
export class OnixProviderService {

  private cache : OnixCache;

  constructor(private onixCodeService: OnixCodeService) {
    this.cache = new OnixCache();
    this.cache.full = this.onixCodeService.findAllOnixCodes('full').pipe(
      shareReplay(1)
    );
    this.cache.vlb = this.onixCodeService.findAllOnixCodes('vlb').pipe(
      shareReplay(1)
    )
  }

  private _profile = new BehaviorSubject('vlb');

  set profile(profile : string){
    this._profile.next(profile);
  }

  get profile(){
    return this._profile.getValue();
  }




  getCodeList(listName: string): Observable<OnixCodeList> {
    return this._profile.pipe(
      flatMap( (p) => {
        return this.cache[p] as Observable<OnixCodeResult>
      }),
      map( all => all.codes.find( list => list.listName == listName))
    )
  }
}
