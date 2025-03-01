import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private city: string = '';
  private zipcode: string = '';
  private lat: number = 0;
  private lon: number = 0;
  private stateCode: string = '';
  private countryCode: string = '';

  getCity(): string {
    return this.city;
  }

  setCity(city: string): void {
    this.city = city;
  }

  getZipcode(): string {
    return this.zipcode;
  }

  setZipcode(zipcode: string): void {
    this.zipcode = zipcode;
  }

  getCoord(): {lat: number, lon: number }{
    return { lat: this.lat, lon: this.lon };
  }

  setCoord(lat: number, lon: number): void {
    this.lat = lat;
    this.lon = lon;
  }

  getStateCode(): string {
    return this.stateCode;
  }

  setStateCode(stateCode: string): void {
    this.stateCode = stateCode;
  }

  getCountryCode(): string {
    return this.countryCode;
  }

  setCountryCode(countryCode: string): void {
    this.countryCode = countryCode;
  }
}
