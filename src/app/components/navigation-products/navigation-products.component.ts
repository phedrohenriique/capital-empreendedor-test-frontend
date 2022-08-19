import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-products',
  template: `
    <nav class="productsNavigation">
        <input style="margin-left: 1em" placeholder="user@email.com">
        <button class="navigationButton">Search Products</button>
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

  constructor() { }

  ngOnInit(): void {
  }

}
