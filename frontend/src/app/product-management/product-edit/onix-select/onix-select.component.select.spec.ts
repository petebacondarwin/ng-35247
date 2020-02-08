import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';

import {OnixSelectComponent} from './onix-select.component';
import {producttestimports} from "../../test.imports";
import {OnixProviderService} from "../../onix-provider.service";
import {of} from "rxjs";
import {mockCodeList} from "./mock.onix-codes";
import {OverlayContainer} from "@angular/cdk/overlay";
import {Component, ViewChild} from "@angular/core";

describe('OnixSelectComponent With Container', () => {

  @Component({
    selector: 'onix-list-test',
    template: `
        <nb-layout>
            <nb-layout-column>
                <app-onix-select #onixSelectComponent></app-onix-select>
            </nb-layout-column>
        </nb-layout>
    `,
  })
  class OnixListTestComponent {

    @ViewChild(OnixSelectComponent, {static: true})
    onixSelectComponent: OnixSelectComponent
  }

  let component: OnixListTestComponent;
  let fixture: ComponentFixture<OnixListTestComponent>;

  const mockOnixService: Partial<OnixProviderService> = {
    getCodeList: jasmine.createSpy().and.returnValue(of(mockCodeList))
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnixListTestComponent, OnixSelectComponent],
      imports: producttestimports,
      providers: [
        {
          provide: OnixProviderService,
          useValue: mockOnixService
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnixListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should fire change event', fakeAsync(() => {
    expect(component).toBeTruthy();
    const listener = jasmine.createSpy("listener");
    component.onixSelectComponent.registerOnChange(listener);
    component.onixSelectComponent.writeValue('C02');
    tick();
    fixture.detectChanges();
    const select = fixture.debugElement.nativeElement as HTMLElement;
    const button = select.querySelector('button');
    button.click();
    tick();
    const container = getTestBed().get(OverlayContainer) as OverlayContainer;
    const option = container.getContainerElement().querySelector("nb-option") as HTMLElement;
    option.click();
    tick();
    expect(listener).toHaveBeenCalledWith('C01');
  }));
});
