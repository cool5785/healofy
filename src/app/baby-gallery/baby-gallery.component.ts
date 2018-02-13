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

  fetchBabyData() {
    this._dataService.getData('/babylist').subscribe((data) => {
      console.log('Baby Data from DB', data);
      this.babylist = data;
    }, (err) => {
      console.log('Baby data error', err);
    });
  }
}
