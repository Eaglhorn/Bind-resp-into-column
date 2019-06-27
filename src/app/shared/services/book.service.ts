import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  private url = 'https://fakerestapi.azurewebsites.net/api/Books';

constructor( private http: HttpClient) {

}
/*получаем данные по url и возвращаем их для дальнейших действий*/
  getBooks() {
    return this.http.get(this.url).map( res => {
      return res;
    });
  }
}
