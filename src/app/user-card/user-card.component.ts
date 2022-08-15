import { Component, Input, OnInit } from '@angular/core';
import { database } from '../database/database';

@Component({
  selector: 'app-user-card',
  template: `
  <div class="mainDiv">
    <div class="userCard">
        <div class="photo">

        </div>
        <ul  class="infoList">
            <li>Name : {{userData.name}}</li>
            <li>Email : {{userData.email}}</li>
            <li>Phone : {{userData.phone}}</li>
        </ul>
    </div>
</div>
  `,
  styles: [
    `
    .mainDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .userCard {
        padding: 1em;
        border-radius: 1em;
        background-color: white;
        gap: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: fit-content;
        height: 50%;
    }

    .infoList {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    `
  ]
})
export class UserCardComponent implements OnInit {

  constructor() { }

  @Input() userData = {
    name: 'client 1',
    email: ' client_1@gmail.com',
    phone: '99 99999 9999'
  }

  ngOnInit(): void {
  }


}
