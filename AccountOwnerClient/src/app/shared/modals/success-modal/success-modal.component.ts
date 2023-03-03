import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  public modalHeaderText: string;
  public modalBodyText: string;
  public okButtonText: string;
  redirectOnOk: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef) {

  }

  onOkClicked = () => {
    this.redirectOnOk.emit();
    this.bsModalRef.hide();
  }
}
