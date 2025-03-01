import axios from 'axios';
import type { Weather } from '@/models/Weather';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPEN_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(city: string): Promise<Weather> {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=imperial`;
  const res = await axios.get(url);

  const data = res.data;

  // convert sunrise and sunset
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  return {
    city: data.name,
    icon: data.weather[0].icon,
    tempHigh: data.main.temp_max,
    tempLow: data.main.temp_min,
    forecast: data.weather[0].description,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    sunrise: sunrise,
    sunset: sunset,
  };
}

export async function getWeatherByZip(zip: string): Promise<Weather> {
  if (!zip.match(/^\d{5}$/)) {
    throw new Error('Invalid zip code');
  }

  const url = `${baseUrl}?q=${zip}&appid=${apiKey}&units=imperial`;
  const res = await axios.get(url);

  const data = res.data;

  // convert sunrise and sunset
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  return {
    city: data.name,
    icon: data.weather[0].icon,
    tempHigh: data.main.temp_max,
    tempLow: data.main.temp_min,
    forecast: data.weather[0].description,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    sunrise: sunrise,
    sunset: sunset,
  };
}

export async function getWeatherCoord(lon: number, lat: number): Promise<Weather> {
  const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  const res = await axios.get(url);

  const data = res.data;

  // convert sunrise and sunset
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  return {
    city: data.name,
    icon: data.weather[0].icon,
    tempHigh: data.main.temp_max,
    tempLow: data.main.temp_min,
    forecast: data.weather[0].description,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    sunrise: sunrise,
    sunset: sunset,
  };
}
