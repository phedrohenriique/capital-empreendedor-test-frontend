import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService implements OnInit {

    // class only used for requests 
    // we can define the HttpClient instance to be used and returned

    readonly apiURL: string = "http://localhost:8800";

    constructor(private http: HttpClient) {
    }

    usersList() {
        return this.http.get(`${this.apiURL}/users`)
    }

    purchasesList() {
        return this.http.get(`${this.apiURL}/purchases`)
    }

    usersInfo(id: string) {
        const userId = id
        return this.http.get(`${this.apiURL}/users/user/${userId}`)
    }

    usersPurchases(id: string) {
        const userId = id
        return this.http.get(`${this.apiURL}/purchases/user/${userId}`)
    }

    ngOnInit(): void {
    }

}