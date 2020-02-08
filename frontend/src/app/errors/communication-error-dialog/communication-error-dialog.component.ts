import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-communication-error-dialog',
  templateUrl: './communication-error-dialog.component.html',
  styleUrls: ['./communication-error-dialog.component.scss']
})
export class CommunicationErrorDialogComponent implements OnInit {


  @Input()
  status: any;

  @Input()
  reason: string;

  constructor(protected ref: NbDialogRef<CommunicationErrorDialogComponent>) { }

  ngOnInit() {
  }



  submit(){
    this.ref.close("ok")
  }

}
