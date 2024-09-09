import { ICityDto } from "@/entities/city";
import { useGetCurrentWeatherUseCase } from "@/entities/weather/api/case/get_current_weather";
import { useEffect } from "react";

export const useRecentLocationPresenter = (city: ICityDto) => {
  const { data, isPending, mutateAsync } = useGetCurrentWeatherUseCase();

  useEffect(() => {
    mutateAsync(city);
  }, []);

  return { isPending, data };
};
