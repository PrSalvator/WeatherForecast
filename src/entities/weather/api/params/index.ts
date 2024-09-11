import { EMinutely } from "@/shared/enums/params";

export class GetCurrentWeatherParams {
  latitude: number = 0;
  longitude: number = 0;
  forecast_days = 1;
  timezone = "auto";
  current = "";
  minutely_15: EMinutely[] = [
    EMinutely.APPARENT_TEMPERATURE,
    EMinutely.IS_DAY,
    EMinutely.RELATIVE_HUMIDITY,
    EMinutely.TEMPERATURE,
    EMinutely.WEATHER_CODE,
    EMinutely.WIND_SPEDD
  ]
  constructor(lat: number, lon: number) {
    this.latitude = lat;
    this.longitude = lon;
  }
}
