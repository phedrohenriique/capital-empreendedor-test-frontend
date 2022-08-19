import { Component, OnInit } from '@angular/core';
import { User, PurchasesProps } from 'src/app/types/types';

@Component({
  selector: 'app-client-page',
  template: `
    <div class="mainClientDiv">
    <div class="clientCardDiv">
      <app-user-card 
      [userData]="userData" 
      [purchaseData]="purchaseData" 
      [showCard]="showCard"
      ></app-user-card>
    </div>
    <div class="clientListDiv">

      <!-- the variables used in component shall be difined inside the used class -->
      <!-- can use block html scope variables with #variable and implement ngModules for logic -->

      <app-user-list 
      (userClicked)="user($event)" 
      (userPurchases)="purchases($event)" 
      (showCard)="show($event)"
      ></app-user-list>
    </div>
  </div>
  `,
  styles: [`
  .mainClientDiv {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100%;
    padding-top:1em;
    padding-bottom:1em;
  }

  .clientCardDiv {
    width: 50%;
    height: 100%;
  }

  .clientListDiv {
    width: 50%;
    height: 100%;
  }
  `]
})

export class ClientPageComponent implements OnInit {

  // app root component is handling all the variables so it can pass to other components and
  // update its data, sinc it is a simple application

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


  ngOnInit(): void {
  }

}
