import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
  <div class="mainDiv">
    <h3>Product</h3>
    <div class="infoList">
      <h5>Name : aaaaaaaaaaaaaa </h5>
      <h5>Email : aaaaaaaaaaaaa </h5>
      <h5>Phone : aaaaaaaaaaaaa</h5>
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

    .infoList {
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: flex-start;
    }

    `
  ]
})
export class ProductCardComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {
  }


}
