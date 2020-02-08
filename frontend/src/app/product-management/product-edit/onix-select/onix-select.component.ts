import {Component, forwardRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OnixCode} from '@eiswind/proto-client-api';
import {OnixProviderService} from "../../onix-provider.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NbSelectComponent} from "@nebular/theme";
import {Observable, Subscription} from "rxjs";
import {delay, first, map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-onix-select',
  templateUrl: './onix-select.component.html',
  styleUrls: ['./onix-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OnixSelectComponent),
      multi: true
    }
  ]
})
export class OnixSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input()
  codeListName: string;


  codeList: Observable<OnixCode[]>;

  selectedItem: OnixCode = null;

  @ViewChild(NbSelectComponent, {static: true})
  onixSelect: NbSelectComponent<OnixCode>;

  private codeListSubscription: Subscription;
  private onChangeSubscription: Subscription;

  constructor(private onixService: OnixProviderService) {
  }

  ngOnInit() {
    this.codeList = this.onixService.getCodeList(this.codeListName).pipe(
      map(list => list.codes),
      shareReplay(1)
    );

    this.codeListSubscription = this.codeList.pipe(delay(0)).subscribe(codes => {
      const selected = this.selectedItem
      if(selected!=null) {
        this.selectedItem = codes.find(code => selected.value == code.value);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.onChangeSubscription) {
      this.onChangeSubscription.unsubscribe();
    }
    this.codeListSubscription.unsubscribe();
  }

  registerOnChange(fn: any): void {
    this.onChangeSubscription = this.onixSelect.selectedChange.subscribe(code => {
      fn(code != null ? code.value : null)
    });

  }

  public onTouched: () => void = () => {
  };

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    if (obj) {
      this.codeList.pipe(
        first(),
        delay(0)
      ).subscribe(codes => {
        this.selectedItem = codes.find(code => code.value == obj);
      })
    }
  }


}
