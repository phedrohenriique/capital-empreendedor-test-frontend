import { Component, OnInit } from '@angular/core';

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
      <div #template>asdadasdsada</div>
    </app-modal-basic>
      <div class="mainUsersContentDiv">
        <app-input-basic 
        inputLabel="asdads"
        inputPlaceholder="aasdeeeee"
        >
      </app-input-basic>
      <button (click)="this.showModal = true">Testing Modal</button>
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

  showModal: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
