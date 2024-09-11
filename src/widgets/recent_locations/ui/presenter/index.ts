import { ICityDto } from "@/entities/city";
import { IWeatherDto } from "@/entities/weather";
import { useGetCurrentWeatherManyPresenter } from "@/entities/weather/api/case/get_current_weather/presenter";
import { getCurrentWeather } from "@/entities/weather/api/slice";
import { useEffect, useState } from "react";

const cities: ICityDto[] = [
  {
    name: "Tomsk",
    country: "RU",
    lat: 56.49,
    lon: 84.97,
    state: "Tomskaya oblast",
  },
  {
    name: "Sochi",
    country: "RU",
    lat: 43.35,
    lon: 39.43,
    state: "Krasnodar region",
  },
];

export const useRecentLocatiosPresenter = () => {
  const {data} = useGetCurrentWeatherManyPresenter(cities);
  return { data };
};
