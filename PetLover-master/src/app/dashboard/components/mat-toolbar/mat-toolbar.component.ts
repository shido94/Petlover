import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.css'],
  // encapsulation: ViewEncapsulation.None,
})

export class MatToolbarComponent {
  @Output() toogleSidenav = new EventEmitter<void>();

  notifications = [{
      id: 1,
      user: {
        id: 1,
        name: 'Rupesh yadav',
        photo: ''
      },
      dataPics: ''
    }, {
      id: 1,
      user: {
        id: 1,
        name: 'Rupesh yadav',
        photo: ''
      },
      dataPics: ''
    }, {
      id: 1,
      user: {
        id: 1,
        name: 'Rupesh yadav',
        photo: ''
      },
      dataPics: ''
    }];

  constructor() {}

}
