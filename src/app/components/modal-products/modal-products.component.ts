import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-products',
  template: `
    <div class="mainBackgroundDiv" (click)="close();">
      <div class="modalDiv" (click)="show(); $event.stopPropagation();">
        <div class="modalTitle">
          <h2>Product</h2><button class="closeButton" (click)="close()">X</button>
        </div>
        <form>
          
        </form>
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
  }

  .modalDiv {
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

  .productInfo {
    /* background-color: #EE7517; */
    border: 2px solid #EE7517;
    border-radius: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 2em;
    padding: 0.5em;
    width: 100%;
  }

  .productInfo:hover {
    transition: 0.5s;
    transform: scale(1.05);
    cursor: pointer;
  }
  `]
})
export class ModalProductsComponent implements OnInit {

  // event emitters to handle the modal showing in another component

  @Output() showFalse = new EventEmitter();
  @Output() showTrue = new EventEmitter();

  @Input() selectedProduct : any;

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
