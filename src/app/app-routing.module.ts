import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path:'home',
   component:HomeComponent
  
  },

  { path: 'shop', component:ShopComponent}
  ,
   {path:'about' , component:AboutComponent},
   {
    path:'contact',component:ContactComponent
   },
   {path:'blog',component:BlogComponent},
{path:'login',component:LoginComponent},
{path:'signin',component:SigninComponent},
{path:'card',component:CardComponent},
{
  path:'',
 redirectTo:'login',
 pathMatch:'full'

}
  ,  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
