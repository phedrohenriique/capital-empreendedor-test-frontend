import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
  <div class="mainDiv">
    <nav class="navigation">
        <a href="/"><button class="navigationButton">home</button></a>
        <a href="/clients"><button class="navigationButton">clients</button></a>
        <a href="/products"><button class="navigationButton">products</button></a>
        <a href="/about"><button class="navigationButton">about</button></a>
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
