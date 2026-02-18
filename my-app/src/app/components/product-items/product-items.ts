import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,  
  imports: [],
  templateUrl: './product-items.html',  
  styleUrl: './product-items.css'      
})
export class ProductItems {  
  @Input() product: any;
  @Output() addToCart = new EventEmitter();

  onAddToCart(){
    console.log("Add to cart clicked");
    console.log(this.product);
    this.addToCart.emit(this.product);
  }
}