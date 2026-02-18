import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,  
  imports: [],
  templateUrl: './counter.html',  
  styleUrl: './counter.css'        
})
export class CounterComponent {
 
  @Input() name: any;
  value = 0;
  
  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}