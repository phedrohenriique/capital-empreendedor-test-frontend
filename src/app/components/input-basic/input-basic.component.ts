import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  template: `
    <div class="mainComponentDiv">
        <label [for]="this.inputId">{{this.inputLabel}}</label>
        <input 
        #input 
        (change)="inputValue(input.value)" 
        [placeholder]="this.inputPlaceholder" 
        [id]="this.inputId"
        [type]="this.inputType"
        >
    </div>
  `,
  styles: [`
  
  .mainComponentDiv{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap:0.5em;
    width: fit-content;

  }

  `]
})
export class InputBasicComponent implements OnInit {
  value: any;

  @Input() inputType? : string = '';
  @Input() inputLabel? : string = '';
  @Input() inputId? : string = '';
  @Input() inputPlaceholder? : string = '';

  constructor() {

  }

  inputValue(value: any) {
    this.value = value
  }

  ngOnInit(): void {
  }

}
