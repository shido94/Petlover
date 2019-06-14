import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register/register.component';
import {MaterialModule} from '../shared/material.module';
import { ContentComponent } from './content/content.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent,
    SideNavComponent,
  ]
})
export class HomeModule { }
