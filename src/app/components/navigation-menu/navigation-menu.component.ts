import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
  <div class="mainDiv">
    <nav class="navigation">
        <a href="/"><button class="navigationButton">Home</button></a>
        <a href="/users"><button class="navigationButton">Users</button></a>
        <a href="/products"><button class="navigationButton">Products</button></a>
        <a href="/register"><button class="navigationButton">Register</button></a>
        <a href="/about"><button class="navigationButton">About</button></a>
    </nav>
</div>
  `,
  styles: [`
  .mainDiv {
        padding: 1em;
    }
    .navigation {
        background-color: white;
        padding: 1em;
        border-radius: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .navigationButton {
      border: 2px solid #EE7517
    }

  `]
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
