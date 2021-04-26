import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { regularName } from '../Name.Validation';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../Shared Classes/shared';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder,private productService:ProductServiceService) { }
  allProduct:IProduct[]
  haveDiscount=false;
  notes=this.fb.group({
    name:['',[Validators.required,regularName(/admin/),regularName(/adminstrator/)]],
    product:[''],
    discount:[''],
    comment:this.fb.array([])
  })

  get user(){
    return this.notes.get('name');
  }
  get comments(){
    return this.notes.get('comment') as FormArray;
  }
  addNewComment(){
    this.comments.push(this.fb.control(''));
  }
  removeComment(index:any){
    this.comments.removeAt(index)
  }
  enterDiscount(){
    if(this.haveDiscount==false){
      this.haveDiscount=true;
      this.notes.get('discount')?.setValidators(Validators.required)
    }
    else{
      this.haveDiscount=false;
      this.notes.get('discount')?.clearValidators()
    }
  }
  
  ngOnInit(): void {
    this.allProduct=this.productService.GetAllProducts();
  }
  onSubmit(data:any)
  {
    console.log(data)
  
  }

}
