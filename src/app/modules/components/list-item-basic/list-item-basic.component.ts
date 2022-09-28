import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-basic',
  templateUrl: './list-item-basic.component.html',
  styleUrls: ['./list-item-basic.component.css']
})
export class ListItemBasicComponent implements OnInit {

  // ngFor in userInfo

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
