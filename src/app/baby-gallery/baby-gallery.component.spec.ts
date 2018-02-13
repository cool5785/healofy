import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyGalleryComponent } from './baby-gallery.component';

describe('BabyGalleryComponent', () => {
  let component: BabyGalleryComponent;
  let fixture: ComponentFixture<BabyGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
