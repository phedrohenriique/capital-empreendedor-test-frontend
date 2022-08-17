import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import database from '../database/data.json'

@Component({
  selector: 'app-user-card',
  template: `
  <div class="mainDiv">
    <app-modal-basic 
      *ngIf="show" 
      (showFalse)="closeModal($event)" 
      (showTrue)="showModal($event)"
      [products]="purchaseData"
      >
    </app-modal-basic>
    <h2 class="title">Client Information</h2>
    <div class="userCard">
        <div class="photo">

        </div>
        <ul  class="infoList">
            <li>Name : {{userData.name}}</li>
            <li>Email : {{userData.email}}</li>
            <li>Phone : {{userData.phone}}</li>
        </ul>
        <div  class="products" (click)="showModal(true)">
          <h2>Products</h2>
          <h4>Total : {{purchaseData.length}} </h4>
          <h4>Delivered</h4>
        </div>
    </div>
</div>
  `,
  styles: [
    `
    .mainDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }

    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 5em;
      padding: 0.5em;
      width: 90%;
    }

    .userCard {
        padding: 1.5em;
        border-radius: 1em;
        background-color: white;
        gap: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: fit-content;
        height: fit-content;
    }

    .infoList {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .products {
      width: fit-content;
      display: flex;
      flex-direction:column;
      border-radius: 10px;
    }

    .products:hover{
      cursor: pointer;
    }

    .products:active{
      background-color: #D0D0D0;
    }
    `
  ]
})
export class UserCardComponent implements OnInit {

  @Input() userData: any
  @Input() purchaseData: any

  differ : any; // setting the variable type to be anything and doesnt need to be declared
  purchases = Object.entries(database.purchases)
  purchasesUserArray = [{}]
  totalProducts = this.purchasesUserArray.length
  show = false

  constructor() {
    this.userData
    this.purchaseData
  }

  showModal(show: any): void {
    this.show = show
    console.log(this.show)
  }

  closeModal(show: any) {
    this.show = false
    console.log(this.show)
  }

  ngOnInit(): void {
  }


}
