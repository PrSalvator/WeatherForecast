import { IWeatherCodesMapItem } from "@/entities/weather/models";
import { EImages } from "@/shared/enum/images";

export const WEATHER_CODES = new Map<number, IWeatherCodesMapItem>([
  [
    0,
    {
      name: "Ясно",
      day_img: EImages.CLEAR_DAY,
      night_img: EImages.CLEAR_NIGHT,
    },
  ],
  [
    1,
    {
      name: "Преимущественно ясно",
      day_img: EImages.MAINLY_CLEAR_DAY,
      night_img: EImages.MAINLY_CLEAR_NIGHT,
    },
  ],
  [
    2,
    {
      name: "Переменная облачность",
      day_img: EImages.PARTLY_CLOUDY_DAY,
      night_img: EImages.PARTLY_CLOUDY_NIGHT,
    },
  ],
  [
    3,
    {
      name: "Пасмурно",
      day_img: EImages.OVERCAST_DAY,
      night_img: EImages.OVERCAST_NIGHT,
    },
  ],
  [
    45,
    {
      name: "Туман",
      day_img: EImages.FOG_DAY,
      night_img: EImages.FOG_NIGHT,
    },
  ],
  [
    48,
    {
      name: "Инейный туман",
      day_img: EImages.DEPOSTING_RIME_FOG_DAY,
      night_img: EImages.DEPOSTING_RIME_FOG_NIGHT,
    },
  ],
  [
    51,
    {
      name: "Небольшая морось",
      day_img: EImages.LIGHT_DRIZZLE_DAY,
      night_img: EImages.LIGHT_DRIZZLE_NIGHT,
    },
  ],
  [
    53,
    {
      name: "Морось",
      day_img: EImages.MODERATE_DRIZZLE_DAY,
      night_img: EImages.MODERATE_DRIZZLE_NIGHT,
    },
  ],
  [
    55,
    {
      name: "Сильная морось",
      day_img: EImages.DENSE_INTENSITY_DRIZZLE_DAY,
      night_img: EImages.DENSE_INTENSITY_DRIZZLE_NIGHT,
    },
  ],
  [
    56,
    {
      name: "Небольшая изморось",
      day_img: EImages.LIGHT_FREEZING_DRIZZLE_DAY,
      night_img: EImages.LIGHT_FREEZING_DRIZZLE_NIGHT,
    },
  ],
  [
    57,
    {
      name: "Изморось",
      day_img: EImages.HEAVY_INTENSITY_FREEZING_DRIZZLE_DAY,
      night_img: EImages.HEAVY_INTENSITY_FREEZING_DRIZZLE_NIGHT,
    },
  ],
  [
    61,
    {
      name: "Небольшой дождь",
      day_img: EImages.SLIGHT_RAIN_DAY,
      night_img: EImages.SLIGHT_RAIN_NIGHT,
    },
  ],
  [
    63,
    {
      name: "Дождь",
      day_img: EImages.MODERATE_RAIN_DAY,
      night_img: EImages.MODERATE_RAIN_NIGHT,
    },
  ],
  [
    65,
    {
      name: "Сильный дождь",
      day_img: EImages.HEAVY_INTENSITY_RAIN_DAY,
      night_img: EImages.HEAVY_INTENSITYE_RAIN_NIGHT,
    },
  ],
  [
    66,
    {
      name: "Небольшой ледяной дождь",
      day_img: EImages.LIGHT_FREEZING_RAIN_DAY,
      night_img: EImages.LIGHT_FREEZING_RAIN_NIGHT,
    },
  ],
  [
    67,
    {
      name: "Ледяной дождь",
      day_img: EImages.HEAVY_INTENSITYE_FREEZING_RAIN_DAY,
      night_img: EImages.HEAVY_INTENSITYE_FREEZING_RAIN_NIGHT,
    },
  ],
  [
    71,
    {
      name: "Небольшой снегопад",
      day_img: EImages.SLIGHT_SNOW_FALL_DAY,
      night_img: EImages.SLIGHT_SNOW_FALL_NIGHT,
    },
  ],
  [
    73,
    {
      name: "Снегопад",
      day_img: EImages.MODERATE_SNOW_FALL_DAY,
      night_img: EImages.MODERATE_SNOW_FALL_NIGHT,
    },
  ],
  [
    75,
    {
      name: "Сильный снегопад",
      day_img: EImages.HEAVY_INTENSITY_SNOW_FALL_DAY,
      night_img: EImages.HEAVY_INTENSITY_SNOW_FALL_NIGHT,
    },
  ],
  [
    77,
    {
      name: "Мелкий снег",
      day_img: EImages.SNOW_GRAINS_DAY,
      night_img: EImages.SNOW_GRAINS_NIGHT,
    },
  ],
  [
    80,
    {
      name: "Небольшой ливень",
      day_img: EImages.SLIGHT_RAIN_SHOWERS_DAY,
      night_img: EImages.SLIGHT_RAIN_SHOWERS_NIGHT,
    },
  ],
  [
    81,
    {
      name: "Ливень",
      day_img: EImages.MODERATE_RAIN_SHOWERS_DAY,
      night_img: EImages.MODERATE_RAIN_SHOWERS_NIGHT,
    },
  ],
  [
    82,
    {
      name: "Сильный ливень",
      day_img: EImages.VIOLENT_SHOWERS_RAIN_DAY,
      night_img: EImages.VIOLENT_SHOWERS_RAIN_NIGHT,
    },
  ],
  [
    85,
    {
      name: "Небольшой снежный ливень",
      day_img: EImages.SLIGHT_SNOW_SHOWERS_DAY,
      night_img: EImages.SLIGHT_SNOW_SHOWERS_NIGHT,
    },
  ],
  [
    86,
    {
      name: "Снежный ливень",
      day_img: EImages.HEAVY_SNOW_SHOWERS_DAY,
      night_img: EImages.HEAVY_SNOW_SHOWERS_NIGHT,
    },
  ],
  [
    95,
    {
      name: "Гроза",
      day_img: EImages.THUNDERSTORM_DAY,
      night_img: EImages.THUNDERSTORM_NIGHT,
    },
  ],
  [
    96,
    {
      name: "Гроза с небольшим градом",
      day_img: EImages.THUNDERSTORM_WITH_SLIGHT_HAIL_DAY,
      night_img: EImages.THUNDERSTORM_WITH_SLIGHT_HAIL_NIGHT,
    },
  ],
  [
    99,
    {
      name: "Гроза с градом",
      day_img: EImages.THUNDERSTORM_WITH_HEAVY_HAIL_DAY,
      night_img: EImages.THUNDERSTORM_WITH_HEAVY_HAIL_NIGHT,
    },
  ],
]);
