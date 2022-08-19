import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-products-page',
  template: `
     <div class="mainProductsDiv">
      <div class="productsDiv">
        <h1>Products</h1>
        <div class="navigationDiv">
          <app-navigation-products></app-navigation-products>
        <div>
        <div class="productsList">
          <app-product-card></app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .mainProductsDiv {
    width: 100%;
    min-height: 100%;
    padding-top:1em;
    padding-bottom:1em;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .productsDiv{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width: 80vw;
    height: 80vh;
    background-color: white;
    border-radius: 2em;
    padding: 0.5em;
  }

  .productsList {
    height:fit-content;
    width:100%;
    padding: 1em;
  }

  .navigationDiv {
    width: 100%;
  }
`]
})
export class ProductsPageComponent implements OnInit {

  userList: any;

  constructor(private service : DatabaseService) {

   }

  ngOnInit(): void {

  }

}
