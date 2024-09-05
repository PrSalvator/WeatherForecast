import { findCity } from "@/entities/city";
import { useMutation } from "@tanstack/react-query";

export const useFindCityUseCase = () => {
  const callback = async (cityName: string) => {
    console.log(cityName, "useCase")
    return findCity(cityName);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      console.log("Города по названия получены");
    },
    onError: () => {
      console.log("Ошибка при получении городов по названию");
    },
  });
};
