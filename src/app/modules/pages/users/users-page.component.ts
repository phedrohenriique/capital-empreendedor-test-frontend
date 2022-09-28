import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ProductProps } from 'src/app/types/types';

// ngModel is updating the value from the element in a two way,
// can manipulate it after sending data through the service

@Component({
  selector: 'app-user-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {

  // app root component is handling all the variables so it can pass to other components and
  // update its data, sinc it is a simple application

  name: string = '';
  email: string = '';
  phone: string = '';
  cpf: string = '';
  showModal: boolean = false;
  showToastSuccess: boolean = false;
  showToastFailure: boolean = false;
  usersList!: Array<any>;
  userPurchaseList!: Array<{ purchase_id: number, user_id: number, products: Array<ProductProps> }>;

  constructor(private service: DatabaseService) {
  }

  listUsers() {
    this.service.usersList().subscribe({
      next: (response: any) => {
        this.usersList = response
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  addUser(form: any) {
    console.log(form.value)
    this.service.createUser(form.value).subscribe({
      next: () => {
        console.log("success")
        this.showToastSuccess = true;
        setTimeout(() => {
          this.showToastSuccess = false;
          window.location.reload() // method that refreshes the page
        }, 2000)
        this.name = ''
        this.email = ''
        this.phone = ''
        this.cpf = ''

      },
      error: () => {
        console.log("error");
        this.showToastFailure = true;
        setTimeout(() => {
          this.showToastFailure = false;
        }, 2000)
        this.name = ''
        this.email = ''
        this.phone = ''
        this.cpf = ''
      }
    })
  }

  userPurchaseListRequest(userId: any) {
    this.showModal = true
    this.service.usersPurchases(userId).subscribe({
      next: (response: any) => { console.log(response); this.userPurchaseList = response },
      error: (error) => { console.log(error); this.userPurchaseList = [] }
    })
  }

  userPurchaseTotalCost(purchaseProducts: any) {

  }

  ngOnInit(): void {
    this.listUsers()
  }

}
