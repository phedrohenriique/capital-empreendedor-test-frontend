import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
  <div class="mainDiv" (click)="showModal()">
    <div class="infoList">
      <h5>Name : {{product.name}} </h5>
      <h5>Cost : {{product.limit}} </h5>
      <h5>Status : {{product.isActive ? "Finished" : "Pending"}}</h5>
    </div>
  </div>
  `,
  styles: [
    `
    .mainDiv {
        padding:1em;
        border: 2px solid #EE7517;
        border-radius:1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height:fit-content;
        width:fit-content;
    }

    .mainDiv:hover{
      transform: scale(1.1);
      transition: 0.5s;
      cursor: pointer;
    }

    .infoList {
        display: flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content: flex-start;
    }

    `
  ]
})
export class ProductCardComponent implements OnInit {

  
  @Output() show = new EventEmitter()
  @Output() selectedProduct = new EventEmitter()
  @Input() product: any;

  constructor() {
  }

  showModal(){
    this.show.emit(true)
    this.selectedProduct.emit(this.product)
  }

  ngOnInit(): void {
  }


}
