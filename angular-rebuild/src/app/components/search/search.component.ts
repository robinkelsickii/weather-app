import { Component, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: true,
})
export class SearchComponent {
  city: string = '';
  zipcode: string = '';

  @Output() searchByCity = new EventEmitter<string>();
  @Output() searchByZip = new EventEmitter<string>();

  searchEvent() {
    if (this.city.trim()) {
      this.searchByCity.emit(this.city);
    }
    if (this.zipcode.trim()) {
      this.searchByZip.emit(this.zipcode);
    }
  }
}
