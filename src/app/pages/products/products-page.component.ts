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
          <app-product-card *ngFor="let product of products"></app-product-card>
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
    min-height: 80vh;
    background-color: white;
    border-radius: 2em;
    padding: 0.5em;
  }

  .productsList {
    flex-wrap: wrap;
    display:flex;
    flex-direction:row;
    gap:1em;
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

  products: any = [1, 2, 3, 4, 5, 6, 7];

  constructor(private service: DatabaseService) {

  }

  userProducts(email: string) {
    this.service.usersPurchases(email).subscribe((response: any) => {
      this.products = response.products
    })
  }

  ngOnInit(): void {

  }

}
