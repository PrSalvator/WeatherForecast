import { ICityDto } from "@/entities/city";
import {
  useGetCurrentWeatherManyUseCase,
  useGetCurrentWeatherUseCase,
} from "@/entities/weather";
import { useEffect } from "react";

export const useGetCurrentWeatherPresenter = (city: ICityDto) => {
  const { data, isPending, isError } = useGetCurrentWeatherUseCase(city);

  useEffect(() => {
    if (isError) console.log(`Ошибка получения погоды для города ${city.name}`);
  }, [isError]);

  return { data, isPending };
};

export const useGetCurrentWeatherManyPresenter = (cities: ICityDto[]) => {
  const data = useGetCurrentWeatherManyUseCase(cities).map(
    (queryResult, index) => {
      if (queryResult.isError)
        console.log(`Ошибка получения погоды для города ${cities[index].name}`);

      return {
        data: queryResult.data,
        isPending: queryResult.isPending,
        isError: queryResult.isError,
        city: cities[index]
      };
    }
  );

  return { data };
};
