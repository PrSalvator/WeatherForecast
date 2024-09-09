import { ICityDto } from "@/entities/city";
import {
  GetCurrentWeatherParams,
  ICurrentWeatherDto,
  IWeatherDto,
} from "@/entities/weather";
import { weatherInstance } from "@/shared/instance";

export const getCurrentWeather = async (
  data: ICityDto
): Promise<IWeatherDto> => {

  try {

    const response = await weatherInstance.get<ICurrentWeatherDto>("", {
      params: new GetCurrentWeatherParams(data.lat, data.lon),
      paramsSerializer: {
        indexes: null,
      },
    });

    const index = response.data.minutely_15.time.findIndex(
      (x) => x === response.data.current.time
    );

    return {
      temperature: response.data.minutely_15.temperature_2m[index],
      relative_humidity: response.data.minutely_15.relative_humidity_2m[index],
      apparent_temperature: response.data.minutely_15.apparent_temperature[index],
      weather_code: response.data.minutely_15.weather_code[index],
      wind: response.data.minutely_15.wind_speed_10m[index],
      is_day: Boolean(response.data.minutely_15.is_day)
    };

  } catch (e) {
    throw e;
  }
  
};
