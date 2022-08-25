import { Component } from '@angular/core';

// app main control elements, the outlet and other divs shall start their composition
// all components will have an outer baisc div, the body has 100vw and 100vh dimensions

@Component({
  selector: 'app',
  template: `
  <div class="mainAppDiv">
      <div class="mainNavigationDiv">
        <app-navigation-basic></app-navigation-basic>
      </div>
      <div class="mainOutletDiv">
        <router-outlet>
        </router-outlet>
      </div>
  </div>
  `,
  styles: [`
  .mainAppDiv {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height: 100vh;
    background-color: #EE7517
  }

  .mainNavigationDiv {
    min-width: 100%;
    min-height: 20%;
  }

  .mainOutletDiv {
    min-width: 100%;
    min-height: 80%;
  }

  `]
})

export class AppComponent {

  constructor() {
  }

}
