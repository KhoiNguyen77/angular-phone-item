import { Component } from '@angular/core';
import { interval } from 'rxjs';
export interface List {
  name: string,
  model: string,
  price: string,
  img: string,
  prePay: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: List[] = [
    {
      name: 'iPhone 14 128GB Chính hãng (VN/A)',
      model: '128GB',
      price: '19.990.000',
      img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-14-128gb-didongviet_1.jpg',
      prePay: '9.995.000 ₫'
    },
    {
      name: 'iPhone 14 256GB Chính hãng (VN/A)',
      model: '256GB',
      price: '22.990.000',
      img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-14-128gb-mau-den-didongviet_2.jpg',
      prePay: '11.495.000 ₫'
    },
    {
      name: 'iPhone 14 512GB Chính hãng (VN/A)',
      model: '512GB',
      price: '24.990.000',
      img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-14-128gb-mau-do-didongviet_2.jpg',
      prePay: '12.495.000 ₫'
    },
  ];
  display:boolean = false;
  selectedItem?:List;
  handleClick(item: List) {
    this.selectedItem = item;
    this.display = true;
  }
}
