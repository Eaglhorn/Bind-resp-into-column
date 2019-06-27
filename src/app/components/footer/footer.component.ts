import {Component} from '@angular/core';


@Component({
    selector: 'footer',
    templateUrl: 'footer.template.html'
})
export class FooterComponent {
  public yearDate;

  constructor() {
    this.getDate();
  }

  getDate() {
    this.yearDate = (new Date()).getFullYear();
  }
}
