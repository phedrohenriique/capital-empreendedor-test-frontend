import { Component } from '@angular/core';
import { User, PurchasesProps } from './types/types';

@Component({
  selector: 'app',
  template: `
  <div class="main" style="background-color: #EE7517;">
  <div class="mainNavigationMenu">
    <app-navigation-menu></app-navigation-menu>
  </div>
  <div class="mainClientInformation">
    <div class="clientInfoOne">
      <app-user-card 
      [userData]="userData" 
      [purchaseData]="purchaseData" 
      [showCard]="showCard"
      ></app-user-card>
    </div>
    <div class="clientInfoTwo">
      <!-- the variables used in component shall be difined inside the used class -->
      <app-user-list 
      (userClicked)="user($event)" 
      (userPurchases)="purchases($event)" 
      (showCard)="show($event)"
      ></app-user-list>
    </div>
  </div>
</div>
  `,
  styles: [`
  .main {
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-height: 100%;
    width: 100%;
  }

  .mainNavigationMenu {
    width: 100%;
    height: 20%;
  }

  .mainClientInformation {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 80%;
    padding-bottom: 1em;
    justify-content: flex-end;
  }

  .clientInfoOne {
    width: 50%;
    height: 100%;
  }

  .clientInfoTwo {
    width: 50%;
    height: 100%;
  }
  `]
})

export class AppComponent {

  userData: User = { name: '', email: '', isActive: false, phone: '', ravenue: 0, agreedTerms: false };
  purchaseData: PurchasesProps = [{ name: '', limit: 0, term: 0, isActive: false }];
  showCard: boolean = false;

  constructor() {
  }

  user(user: any): any {
    this.userData = user
  }

  purchases(purchases: any): any {
    this.purchaseData = purchases
  }

  show(show: boolean) {
    this.showCard = show
  }

}
