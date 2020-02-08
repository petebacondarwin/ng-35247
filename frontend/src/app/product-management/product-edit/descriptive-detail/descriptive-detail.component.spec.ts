import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DescriptiveDetailComponent} from './descriptive-detail.component';
import {NgForm} from "@angular/forms";
import {producttestimports} from "../../test.imports";
import {MockComponent} from "ng-mocks";
import {OnixSelectComponent} from "../onix-select/onix-select.component";
import {TitleDetailComponent} from "./title-detail/title-detail.component";
import {Component, ViewChild} from "@angular/core";

@Component({
  template: `
        <form #form="ngForm">
            <app-descriptive-detail [descriptiveDetail]="{}">
            </app-descriptive-detail>
        </form>
    `,
  providers: []
})
export class TestHostComponent {


  @ViewChild('form', {static: true})
  ngForm: NgForm;
}

describe('DescriptiveDetailComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        DescriptiveDetailComponent,
        MockComponent(OnixSelectComponent),
        MockComponent(TitleDetailComponent)
      ],
      imports: producttestimports
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
