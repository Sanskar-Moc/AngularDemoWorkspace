import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SportsNewsComponent } from './news/sportsnews';
import { FinanceNewsComponent } from './news/financenews';
import { EquityNewsComponent } from './news/equitynews';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const route1: Routes = [
    {path:'about',component:AboutComponent},
    {path:'news',component:NewsComponent }
];
const route2: Routes = [
    {path:'about',component:AboutComponent},
    {
      path:'news',component:NewsComponent,
      children:[
        { path:'news/sports',component:SportsNewsComponent },
        { path:'news/finance',component:FinanceNewsComponent },
        { path: 'news/finance/equity',component:EquityNewsComponent }
      ]
    } 
];

const route3:Routes=[
  {path:'about',component:AboutComponent},
  {
      path:'news',component:NewsComponent,
      children:[
        { path:'news/sports',component:SportsNewsComponent },
        { path:'news/finance',component:FinanceNewsComponent },
        { path: 'news/finance/equity',component:EquityNewsComponent }
      ]
  },
  { path:'prod',component:ProductComponent},
  { path:'selectedprod/:nam',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route3)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
