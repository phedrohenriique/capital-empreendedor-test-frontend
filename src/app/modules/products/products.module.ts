import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductsPageComponent } from 'src/app/pages/products/products-page.component';
import { NavigationProductsComponent } from 'src/app/components/navigation-products/navigation-products.component';
import { ModalProductsComponent } from 'src/app/components/modal-products/modal-products.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsPageComponent,
    NavigationProductsComponent,
    ModalProductsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductCardComponent,
    ProductsPageComponent,
    NavigationProductsComponent,
    ModalProductsComponent
  ]
})
export class ProductsModule {

}
