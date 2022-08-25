import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  template: `
    <div class="mainRegisterDiv">
      <div class="registerContentDiv">
        <div class="registerUserDiv">

        </div>
        <div>
          
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mainRegisterDiv {
      width: 100%;
      min-height: 100%;
      padding-top:0.5em;
      padding-bottom:0.5em;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center
    }

    .registerContentDiv{
      display:flex;
      flex-direction: row;
      align-items:center;
      width: 90vw;
      height: 60vh;
      background-color: white;
      border-radius: 2em;
      padding: 1em;
    }

    .registerUserDiv {
      height:100%;
      width: 25%;
      border-radius: 2em;
      border: 2px solid #EE7517
    }
  `]
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
