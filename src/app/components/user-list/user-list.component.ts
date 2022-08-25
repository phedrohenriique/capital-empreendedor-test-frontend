import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

import { UsersListProps } from '../../types/types';

@Component({
  selector: 'app-user-list',
  template: `
  <div class="mainDiv">
    <h2 class="title">Users List Record</h2>
    <div *ngFor="let user of users" class="userInfo" (click)="clicked(user)">
        <p>ID : {{user.id}} </p>
        <p>NAME: {{user.name}}</p>
        <p>CPF : {{user.cpf}}</p>
    </div>
  </div>
`,
  styles: [`
    .mainDiv {
        width: 90%;
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
        font-size: 1em;
    }

    .userInfo:hover{
      transition: 0.5s;
      transform: scale(1.05);
      cursor: pointer;
    }
  `],
  //providers: [DatabaseService]
})
export class UserListComponent implements OnInit {
  // this is where we can implement javascript logic

  users: UsersListProps = [{ id: 0, name: '', email: '', phone: '', cpf: '' }];
  purchases: any;

  // use auxiliary variables to manipulate fetch data from server
  // observer of fetched data can be used

  // users$
  // purchases$

  purchasesEntries: any;

  constructor(private service: DatabaseService) {
  }

  @Output() userClicked = new EventEmitter();
  @Output() userPurchases = new EventEmitter();
  @Output() showCard = new EventEmitter();

  clicked(user: any): void {
    this.showCard.emit(true)
    this.userClicked.emit(user)
    this.purchasesEntries = Object.entries(this.purchases)
    for (const tuple of this.purchasesEntries) {
      if (tuple[0] === user.email) {
        console.log(tuple[1].products)
        this.userPurchases.emit(tuple[1].products)
      }
    }

  }

  dataUsers() {
    this.service.usersList().subscribe((response) => {
      console.log("response users subscribe : ", response)
      this.users = Object.values(response)
    }) // observable data streaming
  }

  dataPurchases() {
    this.service.purchasesList().subscribe((response: any) => {
      console.log("response purchases subscribe : ", response)
      this.purchases = response
    })
  }



  ngOnInit(): void {

    // all logic of services intializing with component rendering after it constructs
    // for better performance a Observer and variable | async pipe shall be used
    // avoid memory leak and performance improved

    this.dataUsers()
    this.dataPurchases()
  }

}
