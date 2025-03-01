import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-current-weather',
  imports: [SearchComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

}
