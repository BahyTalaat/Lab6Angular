import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared Classes/shared';

@Component({
  selector: 'app-product-without-discount',
  templateUrl: './product-without-discount.component.html',
  styleUrls: ['./product-without-discount.component.scss']
})
export class ProductWithoutDiscountComponent implements OnInit {
  ProductList:any;
  constructor(private ProductService:ProductServiceService) { }

  ngOnInit(): void {
    this.ProductList=this.ProductService.getAllProductswithOutDiscount();   
  }

}
