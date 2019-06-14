import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {VideoListComponent} from './components/video-list/video-list.component';
import {RatedComponent} from './components/rated/rated.component';
import {UploadsComponent} from './components/uploads/uploads.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {UserComponent} from './components/user/user.component';
import {DetailsComponent} from './components/user/profile/edits/details/details.component';
import {PasswordComponent} from './components/user/profile/edits/password/password.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'videos',
        component: VideoListComponent
      },
      {
        path: 'rated',
        component: RatedComponent
      },
      {
        path: 'uploads',
        component: UploadsComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'edits/profile',
            component: DetailsComponent
          },
          {
            path: 'edits/password/change',
            component: PasswordComponent
          },
          {
            path: '**',
            redirectTo: '/home/profile/edits/profile'
          }
        ]
      },
      {
        path: '**',
        redirectTo: '/home/videos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
