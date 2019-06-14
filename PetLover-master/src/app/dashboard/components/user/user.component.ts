import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;

  constructor() {
  }

  ngOnInit() {
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
