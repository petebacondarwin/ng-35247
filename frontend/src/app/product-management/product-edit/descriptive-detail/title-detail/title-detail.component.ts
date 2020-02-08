import {Component, Input, OnInit} from '@angular/core';
import {OTitleDetail} from '@eiswind/proto-client-api';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.sass'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TitleDetailComponent implements OnInit {

  @Input()
  titleDetail: OTitleDetail;

  constructor() {
  }

  ngOnInit() {
  }

}
