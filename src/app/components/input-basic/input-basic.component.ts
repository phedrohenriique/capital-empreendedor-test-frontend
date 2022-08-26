import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  template: `
    <div class="mainComponentDiv">
        <label class="inputLabel" [for]="this.inputId">{{this.inputLabel}}</label>
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:0.5em;
    width: 100%;

  }

  .inputLabel{
  }

  `]
})
export class InputBasicComponent implements OnInit {
  inputData: any;

  @Input() inputType? : string = '';
  @Input() inputLabel? : string = '';
  @Input() inputId? : string = '';
  @Input() inputPlaceholder? : string = '';

  constructor() {

  }

  inputValue(value: any) {
    this.inputData = value
  }

  ngOnInit(): void {
  }

}
