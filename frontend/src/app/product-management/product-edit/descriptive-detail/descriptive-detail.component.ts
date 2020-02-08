import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";
import {ODescriptiveDetail} from '@eiswind/proto-client-api';

@Component({
  selector: 'app-descriptive-detail',
  templateUrl: './descriptive-detail.component.html',
  styleUrls: ['./descriptive-detail.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class DescriptiveDetailComponent implements OnInit {

  @Input()
  descriptiveDetail : ODescriptiveDetail

  constructor() { }

  ngOnInit() {
  }

}
