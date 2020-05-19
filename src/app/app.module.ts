import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperComponent } from './core/cropper/cropper.component';
import { HomeComponent } from './core/home/home.component';
import { ModalComponent } from './core/modal/modal.component';

@NgModule({
  declarations: [AppComponent, CropperComponent, HomeComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ImageCropperModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
