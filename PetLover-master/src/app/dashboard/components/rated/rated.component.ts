import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;


@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.css']
})
export class RatedComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);
  public show = false;
  public buttonName = 'Show';

  folders = [
    {
      name: 'Rupesh',
      updated: new Date('1/1/16'),
      pic: '../../../../assets/Images/rup.jpg',
      subItems: [
        {name: 'Akhil', updated: new Date('1/1/16'), pic: '../../../../assets/Images/rupi.jpg'},
        {name: 'Rupi', updated: new Date('1/1/16'), pic: '../../../../assets/Images/cat.png'}
      ]
    },
    {
      name: 'Krishna',
      updated: new Date('1/17/16'),
      pic: '../../../../assets/Images/rupi.jpg',
      subItems: [{name: 'Prabhat', updated: new Date('1/1/16'), pic: '../../../../assets/Images/rup.jpg'}]
    },
    {
      name: 'Akhil',
      updated: new Date('1/28/16'),
      pic: '../../../../assets/Images/cat.png',
      subItems: [{name: 'Krishna', updated: new Date('1/1/16'), pic: '../../../../assets/Images/rup.jpg'}]
    }
  ];

  constructor(zone: NgZone) {
    this.mediaMatcher.addListener((mql) => {
      zone.run(() => this.mediaMatcher = mql);
    });
  }

  ngOnInit() {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  // show and hide comment text
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

}
