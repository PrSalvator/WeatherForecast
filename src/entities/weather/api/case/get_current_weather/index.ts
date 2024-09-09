import { ICityDto } from "@/entities/city"
import { getCurrentWeather } from "@/entities/weather/api/slice"
import { useMutation } from "@tanstack/react-query";

export const useGetCurrentWeatherUseCase = () => {
    const callback = async (city: ICityDto) => {
        return getCurrentWeather(city);
    }

    return useMutation({
        mutationFn: callback,
        onSuccess: () => {
            console.log("Настоящая погода получена")
        },
        onError: (e) => {
            console.log("Ошибка получения погоды", e)
        }
    })
}