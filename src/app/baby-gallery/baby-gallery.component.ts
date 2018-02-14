import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'baby-gallery',
  templateUrl: './baby-gallery.component.html',
  styleUrls: ['./baby-gallery.component.css']
})
export class BabyGalleryComponent implements OnInit {
  public babylist: any;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.fetchBabyData();
  }

  toggleLike(item) {
    if (!item.isLiked) {
      item.isLiked = true;
      item.likes = parseInt(item.likes, 10) + 1;
    } else {
      item.likes = parseInt(item.likes, 10) - 1;
      item.isLiked = false;
    }
    // TODO: Implement to update and store in DB
  }

  fetchBabyData() {
    this._dataService.getData('/babylist').subscribe((data) => {
      console.log('Baby Data from DB', data);
      this.babylist = data;
    }, (err) => {
      console.log('Baby data error', err);
    });
  }
}
