import {Component, NgZone, OnInit} from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);


  links = [
    {
      name: 'Edit Profile',
      url: '/home/profile/edits/profile'
    },
    {
      name: 'Change Password',
      url: '/home/profile/edits/password/change'
    },
    {
      name: 'Basic Info',
      url: '/home/profile/edits/basic'
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

}
