import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {AppComponent} from './app.component';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  imports: [
    BrowserModule,
    ImageGalleryModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
