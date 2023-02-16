import { Component, Input } from '@angular/core';
import { List } from '../app.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() selectedItem?: List;
}
