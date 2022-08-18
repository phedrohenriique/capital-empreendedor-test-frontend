import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
  <div class="mainDiv">
    <nav class="navigation">
        <a href="/"><button>home</button></a>
        <a href="/clients"><button>clients</button></a>
        <a href="/products"><button>products</button></a>
        <a href="/about"><button>about</button></a>
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
