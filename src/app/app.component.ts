import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day1Assigment';

  products:any;
  Isreturned:boolean=false;
  @ViewChild (ProductsComponent) childData :ProductsComponent
  ExecuteServicesfun()
  {
    this.products=this.childData.renderValues();
    if(this.products!=null)
    {
      this.Isreturned=true;
    }
  }
}
