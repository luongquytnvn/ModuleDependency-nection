import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {AppComponent} from './app.component';
import {GalleryConfig} from './image-gallery/token';
import {ImgSliderComponent} from './img-slider/img-slider.component';
import {BlogComponent} from './blog/blog.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TodoComponent} from './todo/todo.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';

@NgModule({
  imports: [
    BrowserModule,
    ImageGalleryModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ImgSliderComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent,
    TodoComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2},
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
