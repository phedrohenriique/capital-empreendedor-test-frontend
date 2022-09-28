import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {

  // event emitters to handle the modal showing in another component
  // modal component shall be showed with the ngIf pipe in other pages
  // or components

  @Input() data: any;
  @Input() modalTitle: string = '';
  @Output() showFalse = new EventEmitter();
  @Output() showTrue = new EventEmitter();

  constructor() { }

  close(): void {
    this.showFalse.emit(false)
  }

  show(): void {
    this.showTrue.emit(true)
  }

  ngOnInit(): void {

  }

}
