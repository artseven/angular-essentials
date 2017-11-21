import { Component } from '@angular/core';
import {random} from 'lodash';

// without @types/lodash
// import 'lodash';
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
    // without @types/lodash
    // this.number = _.random(1, 10);
    this.number = random(1, 10);
  }
}
