import { ICityDto } from "@/entities/city";
import { getCurrentWeather, IWeatherDto } from "@/entities/weather";
import { EQueryKeys } from "@/shared/enums/query_keys";
import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetCurrentWeatherManyUseCase = ( // get weather of many cities
  cities: ICityDto[]
): UseQueryResult<IWeatherDto>[] => {
  const callback = async (city: ICityDto) => {
    return getCurrentWeather(city);
  };

  return useQueries({
    queries: cities.map((city) => {
      return {
        queryKey: [EQueryKeys.GET_CURRENT_WEATHER, city.name],
        queryFn: () => callback(city),
      };
    }),
  });
};

export const useGetCurrentWeatherUseCase = ( // get weather of one city
  city: ICityDto
): UseQueryResult<IWeatherDto> => {
  const callback = async () => {
    return getCurrentWeather(city);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_CURRENT_WEATHER],
    queryFn: callback,
  });
};
