import { useFindCityUseCase } from "@/entities/city";

export const useFindCityPresenter = () => {
  const { data, isPending, mutateAsync } = useFindCityUseCase();

  const handleFindCity = (cityName: string) => {
    mutateAsync(cityName);
  };

  return { data, isPending, handleFindCity };
};
