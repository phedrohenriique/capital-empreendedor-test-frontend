import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="mainHomeDiv">
      <div class="homeContentDiv">
        <h1>Welcome to Angular</h1>
        <div>
          <p>This is an application developed in Angular Framework using some features</p>
          <p>It is a simulation of a true application, it has been designed to be used for companies intending to check delivered products. Restaurants, markets, logistics are the main designed clients but it can be used for anyone intending to start some business !!! </p>
          <p>This application is an SPA ( Single Page Application) and has some common web features, it can fetch data from a server, show lists, add information to database (not yet implemented). It can be used to checkout clients information as email, name, phone, and the products related to them  </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mainHomeDiv {
      width: 100%;
      min-height: 100%;
      padding-top:1em;
      padding-bottom:1em;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center
    }

    .homeContentDiv{
      display:flex;
      flex-direction: column;
      align-items:center;
      width: 60vw;
      height: 60vh;
      background-color: white;
      border-radius: 2em;
      padding: 2em;
    }
  `]
})
export class HomePageComponent implements OnInit {

  // shall be implemented as a module for code cleanning and appearance

  constructor() { }

  ngOnInit(): void {
  }

}
