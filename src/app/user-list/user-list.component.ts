import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { database } from '../database/database';

@Component({
  selector: 'app-user-list',
  template: `
  <div class="mainDiv">
    <div *ngFor="let user of users" class="userInfo" (click)="clicked(user)">
        <p>Name : {{user.name}} </p>
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
        justify-content: center;
    }

    .userInfo {
        border-radius: 5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 1em;
        border: 1px solid black;
        background-color: white;
        height: fit-content;
        width: 90%;
    }
  `]
})
export class UserListComponent implements OnInit {
  // this is where we can implement javascript logic

  users = database.users

  // constructor we specify attributes of the class when we
  // instantiate, it is the function running at creation x = new Class() --> constructor()

  constructor() {
  }
  // we can set all method of the class



  @Output() userClicked = new EventEmitter();

  clicked(user: any): void {
    console.log("i was clicked")
    console.log(`the user ${user.name} was clicked`)
    this.userClicked.emit(user)
  }


  // logic that happens when the component is rendered
  // similar to useEffect() in React

  ngOnInit(): void {
  }

}
