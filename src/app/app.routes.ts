import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {basicComponent} from './components/layouts/basic.component';


export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'products', pathMatch: 'full'},


  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'products', component: ProductsComponent}
  ]
  }
    ];
