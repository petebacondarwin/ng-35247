import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TitleDetailComponent} from './title-detail.component';
import {MockComponent} from "ng-mocks";
import {OnixSelectComponent} from "../../onix-select/onix-select.component";
import {producttestimports} from "../../../test.imports";
import {NgForm} from "@angular/forms";
import {Component, ViewChild} from "@angular/core";


@Component({
  template: `
        <form #form="ngForm">
            <app-title-detail [titleDetail]="{ titleElements : [ {}]}">
            </app-title-detail>
        </form>
    `,
  providers: []
})
export class TestHostComponent {


  @ViewChild('form', {static: true})
  ngForm: NgForm;
}

describe('TitleDetailComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        TitleDetailComponent,
        MockComponent(OnixSelectComponent)
      ],
      imports: producttestimports,
      // providers: [
      //   {provide: ControlContainer, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
