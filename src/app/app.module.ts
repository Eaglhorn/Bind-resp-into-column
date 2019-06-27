import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {LayoutsModule} from './components/layouts/layouts.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {BookService} from './shared/services/book.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'ng2-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ToastModule.forRoot()
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
