import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-not-found-modal',
  templateUrl: './not-found-modal.component.html',
  styleUrls: ['./not-found-modal.component.scss']
})
export class NotFoundModalComponent {

  @Input() searchTerm: string;

  constructor(public activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }

}
