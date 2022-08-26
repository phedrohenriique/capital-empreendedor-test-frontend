import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user-page',
  template: `
    <div class="mainUsersDiv">
      <app-modal-basic 
      *ngIf="this.showModal" 
      (showFalse)="this.showModal=$event"
      (showTrue)="this.showModal=$event"
      modalTitle="Titulo"
      >
    </app-modal-basic>
      <div class="mainUsersContentDiv">
        <div class="usersList">
        </div>
        <div class="usersRegister">
          <h2>User Regiser</h2>
          <form class="userForm">
            <app-input-basic
            inputLabel="Name :"
            inputPlaceholder="First Name"
            ></app-input-basic>
            <app-input-basic
            inputLabel="Email :"
            inputPlaceholder="User@mail.com"
            ></app-input-basic>
            <app-input-basic
            inputLabel="Phone :"
            inputPlaceholder="(00) 99999-9999"
            ></app-input-basic>
            <app-input-basic
            inputLabel="CPF :"
            inputPlaceholder="777.777.777-77"
            ></app-input-basic>
          </form>
          <div class="buttonDiv">
            <button class="button">Add User</button>
            <button class="button">Clear Data</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mainUsersDiv {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .mainUsersContentDiv {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 90%;
      height: 90%;
      padding:0.5em;
      background-color: white;
      border-radius: 1em;
    }
    
    .usersList {
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:flex-start;
      height:90%;
      width:40%;
      padding:0.5em;
      border-radius: 1em;
      border: 2px solid #EE7517;
    }

    .usersRegister {
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-around;
      height:90%;
      width:40%;
      padding:0.5em;
      border-radius: 1em;
      border: 2px solid #EE7517;
    }

    .userForm {
      display:flex;
      align-items:center;
      justify-content:center;
      gap: 1em;
      flex-wrap:wrap;
    }

    .buttonDiv {
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-around;
      width: 100%;
    }

    .button {
      width: 40%;
    }

  `]
})

export class UsersPageComponent implements OnInit {

  // app root component is handling all the variables so it can pass to other components and
  // update its data, sinc it is a simple application

  showModal: boolean = false;

  constructor(private service: DatabaseService) {
  }

  ngOnInit(): void {
  }

}
