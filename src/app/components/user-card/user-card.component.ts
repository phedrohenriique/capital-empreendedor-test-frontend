import {
  Component,
  Input,
  OnInit
} from '@angular/core';

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
    <div *ngIf="showCard" class="userCard">
        <div class="photo">

        </div>
        <ul class="infoList">
            <li>ID : {{userData.id}}</li>
            <li>NAME : {{userData.name}}</li>
            <li>EMAIL : {{userData.email}}</li>
            <li>PHONE : {{userData.phone}}</li>
            <li>CPF : {{userData.cpf}}</li>
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
        width: 90%;
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
        padding: 2em;
        border-radius: 1em;
        background-color: white;
        gap: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: fit-content;
        height: fit-content;
    }

    .infoList {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .products {
      width: 100%;
      display: flex;
      flex-direction:column;
      border-radius: 10px;
      border: 2px solid #EE7517;
      padding: 1em;
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

  // all data recieved from clicked event in another component and passed through parent component

  @Input() userData: any;
  @Input() purchaseData: any;
  @Input() showCard: boolean = false;

  show: any = false

  constructor() {
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
