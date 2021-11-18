//import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// export class ProductAlertsComponent implements OnInit {
//   @Input() product!: Product;
//   constructor() {}

//
// }
/**
 * <app-product-alerts [product]="objetProd" [userAttr]="objetUser" > */
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  // product = this.getAttribute('product')
  // age : number;
  // name : string;
  //@Input('userAttr') user: { name: string; age: number } | undefined;
  //user = this.getAttribute('userAttr');
  @Output() notify = new EventEmitter();
  ngOnInit(): void {}
}
