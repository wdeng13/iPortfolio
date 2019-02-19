import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelingPlaylistComponent } from './traveling-playlist.component';

describe('TravelingPlaylistComponent', () => {
  let component: TravelingPlaylistComponent;
  let fixture: ComponentFixture<TravelingPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelingPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelingPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
