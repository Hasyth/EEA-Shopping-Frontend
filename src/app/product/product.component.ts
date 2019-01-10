import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [];
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  public getAllProduct() {
    this.prodService.getAllProducts().subscribe(res => {
      this.products = res;
      console.log(this.products)
    })
  }
}
