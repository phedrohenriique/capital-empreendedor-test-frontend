import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-failure',
  template: `
    <div class="mainBackgroundDiv">
      <div class="mainComponentDiv">
        <p> Error </p>
      </div>
  </div>
  `,
  styles: [`
  .mainBackgroundDiv{
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #62626280;
    z-index: 10;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1em;

    animation: fadein 0.5s, fadeout 0.5s 1.5s;
  }

  .mainComponentDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 20vw;
    min-height: fit-content;
    background-color: #BC0000;
    color: white;
    border-radius: 10px;
    gap: 1em;
  }

  .modalTitle {
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    gap:1em;
    width: 100%;
  }

  @keyframes fadein {
    from {  opacity: 0; }
    to {  opacity: 1; }
  }

  @keyframes fadeout {
    from {  opacity: 1; }
    to {  opacity: 0; }
  }
  
  `]
})
export class ToastFailureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
