import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-navigation-products',
  template: `
    <nav class="productsNavigation">
        <input #input (change)="inputValue(input.value)" style="margin-left: 1em" placeholder="user@email.com">
        <button (click)="userProducts(email)" class="navigationButton">Search Products</button>
    </nav>
  `,
  styles: [`
  
    .productsNavigation {
        border: 2px solid #EE7517;
        width:100%;
        background-color: white;
        border-radius: 1em;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap:1em;
    }

    .navigationButton {
      border: 2px solid #EE7517
    }

  `]
})
export class NavigationProductsComponent implements OnInit {

  email: any;
  products: any;

  @Output() productsValue = new EventEmitter()

  constructor(private service: DatabaseService) {

  }

  inputValue(value: any) {
    this.email = value
  }

  userProducts(email: string) {
    console.log(email)
    this.service.usersPurchases(email).subscribe((response: any) => {
      this.products = response.products
      this.productsValue.emit(this.products)
    })
  }

  ngOnInit(): void {
  }

}
