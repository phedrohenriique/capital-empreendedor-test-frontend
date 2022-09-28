import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.css']
})
export class InputBasicComponent implements OnInit {
  inputData: any;

  @Input() inputType?: string = '';
  @Input() inputLabel?: string = '';
  @Input() inputId?: string = '';
  @Input() inputPlaceholder?: string = '';
  @Input() inputName?: string = '';
  @Input() model?: boolean = false;

  @Output() value = new EventEmitter()

  constructor() {
  }

  inputValue(value: any) {
    this.inputData = value
    this.value.emit(this.inputData)
  }

  ngOnInit(): void {
  }

}
