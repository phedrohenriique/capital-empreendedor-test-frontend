import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
  <div class="mainDiv">
    <nav class="navigation">
        <button>home</button>
        <button>clients</button>
        <button>products</button>
        <button>about</button>
    </nav>
</div>
  `,
  styles: [`
  .mainDiv {
        padding: 1em;
    }
    .navigation {
        background-color: #C61F1F;
        padding: 1em;
        border-radius: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

  `]
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
