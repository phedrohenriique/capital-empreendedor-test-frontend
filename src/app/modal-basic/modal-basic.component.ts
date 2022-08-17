import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  template: `
    <div class="mainDiv" (click)="close();">
      <div class="modalDiv" (click)="show(); $event.stopPropagation();">
        <h2>Products List</h2>
        <div *ngFor="let product of products" class="productInfo">
          <p>Type : {{product.name}}</p>
          <p>Cost : {{product.limit}}</p>
          <p>Quantity : {{product.term}}</p>
          <p>Delivered : {{product.isActive}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .mainDiv{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #62626280;
    z-index: 10;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    gap: 1em
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
export class ModalBasicComponent implements OnInit {

  @Output() showFalse = new EventEmitter();
  @Output() showTrue = new EventEmitter();
  @Input() products = [
    // {
    //   name: '',
    //   cost: 0,
    //   quantity: 0,
    //   delivered : false,

    // }
    {
      name: '',
      limit: 0,
      term: 0,
      isActive: false
    }
  ]

  constructor() { }

  close(): void {
    this.showFalse.emit(false)
  }

  show(): void {
    this.showTrue.emit(true)
    console.log("inside modal : ", this.products)
  }

  ngOnInit(): void {

  }

}
