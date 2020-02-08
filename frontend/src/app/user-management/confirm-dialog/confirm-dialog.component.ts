import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(protected ref: NbDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  cancel(){
    this.ref.close()
  }

  submit(){
    this.ref.close("ok")
  }
}
