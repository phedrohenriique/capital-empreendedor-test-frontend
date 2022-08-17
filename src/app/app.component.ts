import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div class="main" style="background-color: #EE7517;">
  <div class="mainNavigationMenu">
    <app-navigation-menu></app-navigation-menu>
  </div>
  <div class="mainClientInformation">
    <div class="clientInfoOne">
      <app-user-card [userData]="userData" [purchaseData]="purchaseData" ></app-user-card>
    </div>
    <div class="clientInfoTwo">
      <!-- the variables used in component shall be difined inside the used class -->
      <app-user-list (userClicked)="user($event)" (userPurchases)="purchases($event)" ></app-user-list>
    </div>
  </div>
</div>
  `,
  styles: [`
  .main {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
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
    height: 80%;
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

  userData = {
    name: '',
    email: '',
    phone: ''

  }

  purchaseData = {
    name: "",
    limit: 0,
    interest: 0,
    term: 0,
    isActive: false
  }

  constructor() {
    this.userData
  }

  user(user: any): any {
    this.userData = user
    console.log("user in parent : ", this.userData.name)
  }

  purchases(purchases:any) : any {
    this.purchaseData = purchases
    console.log(" purchases in parent : ", this.purchaseData)
  }



}
