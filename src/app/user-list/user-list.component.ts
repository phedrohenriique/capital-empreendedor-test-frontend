import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import database from '../database/data.json'

export type UserProps = {
  name: string
  email: string,
  isActive: boolean,
  phone: string,
  revenue: number,
  agreedTerms: boolean
}

@Component({
  selector: 'app-user-list',
  template: `
  <div class="mainDiv">
    <h2 class="title">Clients List Record</h2>
    <div *ngFor="let user of users" class="userInfo" (click)="clicked(user)">
        <p>Name : {{user.name}} </p>
        <p>Email : {{user.email}}</p>
        <p>Phone : {{user.phone}}</p>
    </div>
  </div>
`,
  styles: [`
    .mainDiv {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 1em;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 5em;
      padding: 0.5em;
      width: 90%;
    }

    .userInfo {
        padding-right: 1em;
        padding-left: 1em;
        border-radius: 5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1em;
        background-color: white;
        height: fit-content;
        width: 90%;
    }

    .userInfo:hover{
      transition: 0.5s;
      transform: scale(1.05);
      cursor: pointer;
    }
  `]
})
export class UserListComponent implements OnInit {
  // this is where we can implement javascript logic

  // transforming json file (data) into array of values to iterate
  users = Object.values(database.users)
  purchases = Object.entries(database.purchases)
  //purchasesArray = Object.entries(database.purchases)

  // constructor we specify attributes of the class when we
  // instantiate, it is the function running at creation x = new Class() --> constructor()

  constructor() {
  }
  // we can set all method of the class

  @Output() userClicked = new EventEmitter();
  @Output() userPurchases = new EventEmitter();

  clicked(user: UserProps): void {
    console.log(`the user ${user.name} was clicked`)
    this.userClicked.emit(user)
    for (const tuple of this.purchases) {
      if(tuple[0] === user.email){
        this.userPurchases.emit(tuple[1].products)
      }
    }
  }

  // logic that happens when the component is rendered
  // similar to useEffect() in React

  ngOnInit(): void {

  }

}
