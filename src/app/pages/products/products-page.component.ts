import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  template: `
    <div class="mainProductsDiv">
      <div class="mainProductsContentDiv">
      </div>
    </div>
  `,
  styles: [`
    .mainProductsDiv {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .mainProductsContentDiv {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 90%;
      background-color: white;
      border-radius: 1em;
    }
    
  `]
})
export class ProductsPageComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

}
