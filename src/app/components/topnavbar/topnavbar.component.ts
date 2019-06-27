import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';


@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
  public userName = 'Admin';
  date: Date = new Date();
  dateS = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  constructor() {
  }

}
