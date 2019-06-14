import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const exporterdMaterialModule = [
  MatButtonModule,
  FormsModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatRadioModule,
  MatGridListModule,
  FlexLayoutModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    ...exporterdMaterialModule
  ],
  exports: [
    ...exporterdMaterialModule,
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class MaterialModule { }
