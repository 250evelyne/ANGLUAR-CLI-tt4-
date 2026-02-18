import { Component } from '@angular/core';
import { ProductItems } from '../product-items/product-items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductItems, CommonModule],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css'
})
export class ListProducts {
  products = [
    {id: 1, name: "Product A", price: 10.99},
    {id: 2, name: "Product B", price: 8.99},
    {id: 3, name: "Product C", price: 7.99},
  ]
  cart: any[] = [];
  sum = 0;

  onAddToCart(product: any){
    console.log("This is The List Of Products Component");
    // console.log(product);
    this.cart.push(product);
    this.sum += product.price;
  }

  onRemoveFromCart(index: number){
    console.log("Removing from cart at index:", index);
    const removedProduct = this.cart[index];
    this.sum -= removedProduct.price;
    this.cart.splice(index, 1);  
  }
}