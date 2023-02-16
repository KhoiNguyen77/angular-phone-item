import { Component, Input } from '@angular/core';
import { List } from '../app.component';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent {
  @Input() selectedItem?:List;
}
