import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BabyListComponent} from '../baby-list/baby-list.component';
import {BabyGalleryComponent} from '../baby-gallery/baby-gallery.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BabyListComponent
  },
  {
    path: 'gallery',
    component: BabyGalleryComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
