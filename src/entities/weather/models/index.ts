export interface IWeatherDto {
  temperature: number;
  apparent_temperature: number;
  weather_code: number;
  wind: number;
  relative_humidity: number;
  is_day: boolean;
}

export interface ICurrentWeatherPort {
  lat: number;
  lon: number;
}

export interface ICurrentWeatherDto {
  current: {
    time: string;
  };
  minutely_15: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    wind_speed_10m: number[];
    weather_code: number[];
    is_day: number[];
  };
}
