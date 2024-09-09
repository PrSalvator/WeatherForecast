import { ICityDto } from "@/entities/city";
import { IWeatherDto } from "@/entities/weather";
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
    name: "Tomsk",
    country: "RU",
    lat: 56.49,
    lon: 84.97,
    state: "Tomskaya oblast",
  },
];

export const useRecentLocatiosPresenter = () => {
  return { cities };
};
