import { Component, Inject } from '@angular/core';
import { CartServiceService } from './cart-service.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: any;

  constructor(private cartService: CartServiceService) {
    
    this.cartService.getAllItems().subscribe(response => {
      this.items = response;
  
    });
  }


  toggleForm(index) {
    this.items[index].updatingItem = !this.items[index].updatingItem;
    console.log(this.items[index]);
  
  }

  addItem(form) {
    this.cartService.addNewItem({
      ...form.value, product: form.value.product, price: form.value.price, quantity: form.value.quantity}).subscribe(response => {
        this.items = response;
      });
  }

  updateItem(item) {

    this.cartService.updateAnItem(item).subscribe(response => {
      
      this.items = response;
    });

    
  }

  removeItem(id) {
    console.log(id);
    
    this. cartService.removeAnItem(id).subscribe(response => {
      this.items = response;
    });
    
  }

}
