import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-now-modal',
  templateUrl: './order-now-modal.component.html',
  styleUrls: ['./order-now-modal.component.scss']
})
export class OrderNowModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
