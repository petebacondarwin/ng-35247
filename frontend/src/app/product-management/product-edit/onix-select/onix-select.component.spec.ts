import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {OnixSelectComponent} from './onix-select.component';
import {producttestimports} from "../../test.imports";
import {OnixProviderService} from "../../onix-provider.service";
import {of} from "rxjs";
import {mockCodeList} from "./mock.onix-codes";

describe('OnixSelectComponent', () => {



  let component: OnixSelectComponent;
  let fixture: ComponentFixture<OnixSelectComponent>;
  let overlayContainerElement: HTMLElement;
  const mockOnixService: Partial<OnixProviderService> = {
    getCodeList: jasmine.createSpy().and.returnValue(of(mockCodeList))
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnixSelectComponent],
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
    fixture = TestBed.createComponent(OnixSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the written value', fakeAsync(() => {
    expect(component).toBeTruthy();

    component.writeValue('C01');
    tick();
    fixture.detectChanges();
    const select = fixture.debugElement.nativeElement as HTMLElement;
    const button = select.querySelector('button');
    const label = button.querySelector('nb-select-label');
    expect(label.textContent).toBe(" Text1 ")
  }));



});
