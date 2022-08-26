import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  template: `
    <div class="mainBackgroundDiv" (click)="close();">
      <div class="mainComponentDiv" (click)="show(); $event.stopPropagation();">
        <div class="modalTitle">
          <h2>{{this.modalTitle}}</h2><button class="closeButton" (click)="close()">X</button>
        </div>
        <div>
          <ng-content>
          </ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .mainBackgroundDiv{
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #62626280;
    z-index: 10;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    
  }

  .mainComponentDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3em;
    min-width: 60vw;
    min-height: 60vh;
    background-color: white;
    border-radius: 10px;
    gap: 1em;

    -webkit-transition: -webkit-transform 0.25s ease-in;
  }

  .modalTitle {
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    gap:1em;
    width: 100%;
  }

  .closeButton {
    position:relative;
    top:0px;
    right:0px;
    left: 250px;
    border: none;
  }
  
  `]
})
export class ModalBasicComponent implements OnInit {

  // event emitters to handle the modal showing in another component
  // modal component shall be showed with the ngIf pipe in other pages
  // or components

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
