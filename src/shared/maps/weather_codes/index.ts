import { EWeatherCodes } from "@/shared/enums/weather_codes";

export const WEATHER_CODE_TO_RU_MAP = new Map<EWeatherCodes, string>([
  [
    EWeatherCodes.CLEAR, "Ясно"
  ],
  [
    EWeatherCodes.MAINLY_CLEAR, "Преимущественно ясно"
  ],
  [
    EWeatherCodes.PARTLY_CLOUDY, "Переменная облачность",
  ],
  [
    EWeatherCodes.OVERCAST, "Пасмурно"
  ],
  [
    EWeatherCodes.FOG, "Туман"
  ],
  [
    EWeatherCodes.DEPOSTING_RIME_FOG,"Инейный туман"
  ],
  [
    EWeatherCodes.LIGHT_DRIZZLE, "Небольшая морось"
  ],
  [
    EWeatherCodes.MODERATE_DRIZZLE, "Морось"
  ],
  [
    EWeatherCodes.DENSE_INTENSITY_DRIZZLE, "Сильная морось"
  ],
  [
    EWeatherCodes.LIGHT_FREEZING_DRIZZLE, "Небольшая изморось"
  ],
  [
    EWeatherCodes.HEAVY_INTENSITY_FREEZING_DRIZZLE, "Изморось"
  ],
  [
    EWeatherCodes.SLIGHT_RAIN, "Небольшой дождь"
  ],
  [
    EWeatherCodes.MODERATE_RAIN, "Дождь"
  ],
  [
    EWeatherCodes.HEAVY_INTENSITY_RAIN, "Сильный дождь"
  ],
  [
    EWeatherCodes.LIGHT_FREEZING_RAIN, "Небольшой ледяной дождь"
  ],
  [
    EWeatherCodes.HEAVY_INTENSITYE_FREEZING_RAIN, "Ледяной дождь"
  ],
  [
    EWeatherCodes.SLIGHT_SNOW_FALL, "Небольшой снегопад"
  ],
  [
    EWeatherCodes.MODERATE_SNOW_FALL, "Снегопад"
  ],
  [
    EWeatherCodes.HEAVY_INTENSITY_SNOW_FALL, "Сильный снегопад"
  ],
  [
    EWeatherCodes.SNOW_GRAINS, "Мелкий снег"
  ],
  [
    EWeatherCodes.SLIGHT_RAIN_SHOWERS, "Небольшой ливень"
  ],
  [
    EWeatherCodes.MODERATE_RAIN_SHOWERS, "Ливень"
  ],
  [
    EWeatherCodes.VIOLENT_SHOWERS_RAIN, "Сильный ливень"
  ],
  [
    EWeatherCodes.SLIGHT_SNOW_SHOWERS, "Небольшой снежный ливень"
  ],
  [
    EWeatherCodes.SLIGHT_SNOW_SHOWERS, "Снежный ливень"
  ],
  [
    EWeatherCodes.THUNDERSTORM, "Гроза"
  ],
  [
    EWeatherCodes.THUNDERSTORM_WITH_SLIGHT_HAIL, "Гроза с небольшим градом"
  ],
  [
    EWeatherCodes.THUNDERSTORM_WITH_HEAVY_HAIL, "Гроза с градом"
  ],
]);
