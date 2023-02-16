import { Component, Input } from '@angular/core';
import { List } from '../app.component';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {
  @Input() selectedItem?:List;
}
