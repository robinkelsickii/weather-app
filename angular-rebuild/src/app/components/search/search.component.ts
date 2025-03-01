import { Component, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../core/services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: true,
})
export class SearchComponent {
  city: string = '';
  zipcode: string = '';
  lat: number = 0;
  lon: number = 0;
  stateCode: string = '';
  countryCode: string = '';

  constructor(private locationservice: LocationService) {
    this.city = locationservice.getCity();
    this.zipcode = locationservice.getZipcode();
    const coord = locationservice.getCoord();
    this.lat = coord.lat;
    this.lon = coord.lon;
    this.stateCode = locationservice.getStateCode();
    this.countryCode = locationservice.getCountryCode();
  }

  setLocationData(): void {
    this.locationservice.setCity(this.city);
    this.locationservice.setZipcode(this.zipcode);
    this.locationservice.setCoord(this.lat, this.lon);
    this.locationservice.setStateCode(this.stateCode);
    this.locationservice.setCountryCode(this.countryCode);
  }
}
