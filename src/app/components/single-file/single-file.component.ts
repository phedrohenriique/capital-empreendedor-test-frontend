import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-file',
  template: `
    <p>
      single-file works!
    </p>
  `,
  styles: [
    `
     p {
      color: black;
    }
    `
  ]
})
export class SingleFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
