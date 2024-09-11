import {
  IWeatherDto,
  ICurrentWeatherPort,
  ICurrentWeatherDto,
} from "@/entities/weather/models";
import { GetCurrentWeatherParams } from "@/entities/weather/api/params";
import { useGetCurrentWeatherUseCase, useGetCurrentWeatherManyUseCase } from "@/entities/weather/api/case/get_current_weather/use_case";
import { getCurrentWeather } from "@/entities/weather/api/slice";

export type { IWeatherDto, ICurrentWeatherPort, ICurrentWeatherDto };
export {
  GetCurrentWeatherParams,
  useGetCurrentWeatherUseCase,
  getCurrentWeather,
  useGetCurrentWeatherManyUseCase 
};
