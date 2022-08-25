import { Component, OnInit } from '@angular/core';

// main divs will represent the totality of the page, everything will be based on its content

@Component({
  selector: 'app-navigation-basic',
  template: `
    <div class="mainComponentDiv">
      <nav class="navigatorContentDiv"> 
        <a href="/"><button>Home</button></a>
        <a href="/users"><button>Users</button></a>
        <a href="/products"><button>Products</button></a>
        <a href="/about"><button>About</button></a>
      </nav>
    </div>
  `,
  styles: [`
  .mainComponentDiv {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .navigatorContentDiv {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 1em;
  }
  `]
})
export class NavigationBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
