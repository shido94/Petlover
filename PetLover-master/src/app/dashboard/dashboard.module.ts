import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './components/user/user.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import {MaterialModule} from '../shared/material.module';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatToolbarComponent} from './components/mat-toolbar/mat-toolbar.component';
import { RatedComponent } from './components/rated/rated.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { PasswordComponent } from './components/user/profile/edits/password/password.component';
import { DetailsComponent } from './components/user/profile/edits/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    VideoListComponent,
    ProfileComponent,
    SideNavComponent,
    MatToolbarComponent,
    RatedComponent,
    UploadsComponent,
    PasswordComponent,
    DetailsComponent,
  ],

})
export class DashboardModule { }
