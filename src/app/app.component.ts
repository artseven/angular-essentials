import { Component } from '@angular/core';
import 'lodash';

// declare var _: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Art';
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onIncrease() {
    this.number = _.random(1, 10);
  }
}
