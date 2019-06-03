import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { } 

  getAllItems() {

    console.log("hello?");
    
    return this.http.get("/api/cart-items", { responseType: "json"});
  }


}
