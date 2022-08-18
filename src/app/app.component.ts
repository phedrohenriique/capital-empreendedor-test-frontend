import { Component } from '@angular/core';
import { User, PurchasesProps } from './types/types';

@Component({
  selector: 'app',
  template: `
  <div class="mainAppDiv" style="background-color: #EE7517;">
      <div class="mainNavigationDiv">
        <app-navigation-menu></app-navigation-menu>
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
    gap: 1em;
    min-height: 100%;
    width: 100%;
  }

  .mainNavigationDiv {
    width: 100%;
    height: 20%;
  }

  .mainOutletDiv {
    width: 100%;
    min-height: 80%;
  }

  `]
})

export class AppComponent {

  constructor() {
  }

}
