import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoaderComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    HttpClientModule ,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ToastContainerComponent]
})
export class AppModule { }
