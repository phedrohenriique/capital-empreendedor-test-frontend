import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <div class="mainUsersDiv">
      <div class="mainUsersContentDiv">
        <app-input-basic 
        inputLabel="asdads"
        inputPlaceholder="aasdeeeee"
        >
      </app-input-basic>
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
      justify-content: center;
      width: 90%;
      height: 90%;
      background-color: white;
      border-radius: 1em;
    }
    
  `]
})

export class UsersPageComponent implements OnInit {

  // app root component is handling all the variables so it can pass to other components and
  // update its data, sinc it is a simple application

  constructor() {
  }

  ngOnInit(): void {
  }

}
