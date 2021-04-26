import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RegisterreactiveformComponent } from './registerreactiveform/registerreactiveform.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"comment",component:NotesComponent},
  {path:"products",component:ProductsComponent,
  children:
  [
    {path:'productwithdiscount',component:ProductWithDiscountComponent},
    {path:'productwithOutdiscount',component:ProductWithoutDiscountComponent}
  ]
   },
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"Registeration",component:RegisterreactiveformComponent},
  {path:"**",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
