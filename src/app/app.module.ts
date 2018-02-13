import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import {environment} from '../environments/environment';
import { BabyListComponent } from './baby-list/baby-list.component';
import { BabyGalleryComponent } from './baby-gallery/baby-gallery.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BabyListComponent,
    BabyGalleryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
