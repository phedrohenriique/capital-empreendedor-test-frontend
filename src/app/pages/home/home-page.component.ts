import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="mainHomeDiv">
      <div class="mainHomeContentDiv">
      </div>
    </div>
  `,
  styles: [`
    .mainHomeDiv {
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .mainHomeContentDiv {
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
export class HomePageComponent implements OnInit {

  // shall be implemented as a module for code cleanning and appearance

  constructor() { }

  ngOnInit(): void {
  }

}
