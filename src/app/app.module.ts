import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './route';
import {NgxGalleryModule} from 'ngx-gallery';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import {CityDetailComponent} from './city/city-detail/city-detail.component';
import {CityAddComponent} from './city/city-add/city-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutoSizeInputModule} from 'ngx-autosize-input';
import { RegisterComponent } from './register/register.component';
import {NgxEditorModule} from 'ngx-editor'
import { PhotoComponent } from './photo/photo.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FormsModule,
      ReactiveFormsModule,
      AutoSizeInputModule,
      NgxEditorModule,
      FileUploadModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
