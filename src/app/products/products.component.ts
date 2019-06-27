import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {AbstractComponent} from '../components/abstract';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
/*наследуемся от класа в котором можна описать мног очего например обработку ошибок и тд*/
export class ProductsComponent extends AbstractComponent implements OnInit {
/*переменная которая принимает значения с фейкАпи*/
  public books;

/*принимает 3 аргумента 1 севис, 2-3 установил доп либу(см. package-json) для лучшего вывода ошибок */
  constructor(
    public bookService: BookService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef) {
    super(toastr, vcr);
  }

  ngOnInit() {
    this.getBooks();
  }

  /*функция в которой мы подписыаемся на  данные с сервиса и "записуем" в переменную books, что бы вывести в html( см. products.component.html) */
  getBooks() {
    this.bookService.getBooks().subscribe(book => {
      this.books = book;
    },
      err => this.handleServerError(err)); /* обработка ошибок*/
  }
}
