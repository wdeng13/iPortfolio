import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traveling-playlist',
  templateUrl: './traveling-playlist.component.html',
  styleUrls: ['./traveling-playlist.component.css']
})
export class TravelingPlaylistComponent implements OnInit {

  public lat: number;
  public lng: number;
  public default_lat: number;
  public default_lng: number;

  constructor() { }

  ngOnInit() {
    this.default_lat = 33.4484;
    this.default_lng = -112.0740;
    this.lat = 33.4484;
    this.lng = -112.0740;
  }

  mapClicked(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

}
