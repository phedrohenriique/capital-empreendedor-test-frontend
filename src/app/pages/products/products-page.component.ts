import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-products-page',
  template: `
    <app-modal-products 
    (showFalse)="showModal($event)" 
    (showTrue)="showModal($event)"
    [selectedProduct]="selectedProduct" 
    *ngIf="show"
    ></app-modal-products>
     <div class="mainProductsDiv">
      <div class="productsDiv">
        <h1>Products</h1>
        <div class="navigationDiv">
          <app-navigation-products (productsValue)="productsList($event)"></app-navigation-products>
        <div>
        <div class="productsList">
          <app-product-card 
          *ngFor="let product of products" 
          [product]="product"
          (selectedProduct)="chosenProduct($event)"
          (show)="showModal($event)"
          ></app-product-card>
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
    justify-content:flex-start;
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

  products: any = [];
  selectedProduct: any;
  show: boolean = false;

  constructor() {

  }

  chosenProduct(value: any) {
    this.selectedProduct = value
  }

  productsList(value: any) {
    this.products = value
  }

  showModal(value: boolean) {
    this.show = value
  }

  ngOnInit(): void {

  }

}
