import { Component, OnInit } from '@angular/core';
import { database } from '../database/database';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // this is where we can implement javascript logic


  users = database.users

  constructor() { }

// logic that happens when the component is rendered
ngOnInit(): void {
  console.log(this.users)
}

}
