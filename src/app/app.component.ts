import { Component } from '@angular/core';
import { CartServiceService } from './cart-service.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cartItems: any;

  constructor(private cartService: CartServiceService) {
    
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;

    });
  }



}
