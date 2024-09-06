import { EImages } from "@/shared/enum/images";

export interface IWeatherDto {
  temperature: number;
  apparent_temperature: number;
  weather_code: number;
}

export interface IWeatherCodesMapItem {
  name: string;
  day_img: EImages;
  night_img: EImages;
}
