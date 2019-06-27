import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProductsComponent} from '../products/products.component';
import {BookService} from '../shared/services/book.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
/*наследуемся от компонента ProductsComponent что бы не повторять себя( свой код)  - DRY */
export class HomeComponent extends ProductsComponent implements OnInit {

  constructor(
    public bookService: BookService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    super(bookService, toastr, vcr);
  }

  ngOnInit() {
    this.getBooks();
  }

}
