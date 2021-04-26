import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers, IProduct } from '../Shared Classes/shared';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {


  ProductList:any;
 
 
  constructor(private ProductService:ProductServiceService) { }

  ngOnInit(): void {

    this.ProductList=this.ProductService.getAllProductswithDiscount();
  }

}
