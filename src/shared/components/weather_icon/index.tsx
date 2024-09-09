import ClearDayIcon from "@/assets/weather/clear-day.svg?react";
import ClearNightIcon from "@/assets/weather/clear-night.svg?react";
import MainlyClearDayIcon from "@/assets/weather/cloudy-day.svg?react";
import MainlyClearNightIcon from "@/assets/weather/cloudy-night.svg?react";
import PartlyCloudyDayIcon from "@/assets/weather/cloudy-day.svg?react";
import PartlyCloudyNightIcon from "@/assets/weather/cloudy-night.svg?react";
import OvercastDayIcon from "@/assets/weather/overcast.svg?react";
import OvercastNightIcon from "@/assets/weather/overcast.svg?react";
import FogDayIcon from "@/assets/weather/fog-day.svg?react";
import FogNightIcon from "@/assets/weather/fog-night.svg?react";
import DepostingRimeFogDayIcon from "@/assets/weather/fog-day.svg?react";
import DepostingRimeFogNightIcon from "@/assets/weather/fog-night.svg?react";
import LightDrizzleDayIcon from "@/assets/weather/drizzle-day.svg?react";
import LightDrizzleNightIcon from "@/assets/weather/drizzle-night.svg?react";
import ModerateDrizzleDayIcon from "@/assets/weather/drizzle-day.svg?react";
import ModerateDrizzleNightIcon from "@/assets/weather/drizzle-night.svg?react";
import DenseIntensityDrizzleDayIcon from "@/assets/weather/drizzle-day.svg?react";
import DenseIntensityDrizzleNightIcon from "@/assets/weather/drizzle-night.svg?react";
import LightFreezingDrizzleDayIcon from "@/assets/weather/freezing-drizzle-day.svg?react";
import LightFreezingDrizzleNightIcon from "@/assets/weather/freezing-drizzle-night.svg?react";
import HeavyIntesityFreezingDrizzleDayIcon from "@/assets/weather/freezing-drizzle-day.svg?react";
import HeavyIntesityFreezingDrizzleNightIcon from "@/assets/weather/freezing-drizzle-night.svg?react";
import SlightRainDayIcon from "@/assets/weather/slight-rain-day.svg?react";
import SlightRainNightIcon from "@/assets/weather/slight-rain-night.svg?react";
import ModerateRainDayIcon from "@/assets/weather/rain-day.svg?react";
import ModerateRainNightIcon from "@/assets/weather/rain-night.svg?react";
import HeavyIntesityRainDayIcon from "@/assets/weather/rain-day.svg?react";
import HeavyIntesityRainNightIcon from "@/assets/weather/rain-night.svg?react";
import LightFreezingRainDayIcon from "@/assets/weather/freezing-drizzle-day.svg?react";
import LightFreezingRainNightIcon from "@/assets/weather/freezing-drizzle-night.svg?react";
import HeavyIntesityFreezingRainDayIcon from "@/assets/weather/freezing-drizzle-day.svg?react";
import HeavyIntesityFreezingRainNightIcon from "@/assets/weather/freezing-drizzle-night.svg?react";
import SlightSnowFallDayIcon from "@/assets/weather/snowfall-day.svg?react";
import SlightSnowFallNightIcon from "@/assets/weather/snowfall-night.svg?react";
import ModerateSnowFallDayIcon from "@/assets/weather/snowfall-day.svg?react";
import ModerateSnowFallNightIcon from "@/assets/weather/snowfall-night.svg?react";
import HeavyIntesitySnowFallDayIcon from "@/assets/weather/snowfall-day.svg?react";
import HeavyIntesitySnowFallNightIcon from "@/assets/weather/snowfall-night.svg?react";
import SnowGrainsDayIcon from "@/assets/weather/snow-grains-day.svg?react";
import SnowGrainsNightIcon from "@/assets/weather/snow-grains-night.svg?react";
import SlightRainShowersDayIcon from "@/assets/weather/rain-showers-day.svg?react";
import SlightRainShowersNightIcon from "@/assets/weather/rain-showers-night.svg?react";
import ModerateRainShowersDayIcon from "@/assets/weather/rain-showers-day.svg?react";
import ModerateRainShowersNightIcon from "@/assets/weather/rain-showers-night.svg?react";
import ViolentShowersRainDayIcon from "@/assets/weather/rain-showers-day.svg?react";
import ViolentShowersRainNightIcon from "@/assets/weather/rain-showers-night.svg?react";
import SlightSnowShowersDayIcon from "@/assets/weather/snowfall-day.svg?react";
import SlightSnowShowersNightIcon from "@/assets/weather/snowfall-night.svg?react";
import HeavySnowShowersDayIcon from "@/assets/weather/snowfall-day.svg?react";
import HeavySnowShowersNightIcon from "@/assets/weather/snowfall-night.svg?react";
import ThunderstormDayIcon from "@/assets/weather/thunderstorm-day.svg?react";
import ThunderstormNightIcon from "@/assets/weather/thunderstorm-night.svg?react";
import ThunderstromWithSlightHailDayIcon from "@/assets/weather/thunderstorm-day.svg?react";
import ThunderstromWithSlightHailNightIcon from "@/assets/weather/thunderstorm-night.svg?react";
import ThunderstromWithHeavyHailDayIcon from "@/assets/weather/thunderstorm-day.svg?react";
import ThunderstromWithHeavyHailNightIcon from "@/assets/weather/thunderstorm-night.svg?react";
import { EWeatherCodes } from "@/shared/enum/images";

interface IWeatherIconProps extends React.SVGProps<SVGSVGElement> {
  weatherCode: number;
  isDay: boolean;
}

export const WeatherIcon = ({
  weatherCode,
  isDay,
  ...props
}: IWeatherIconProps) => {
  switch (weatherCode) {
    case EWeatherCodes.CLEAR:
      if (isDay) return <ClearDayIcon {...props} />;
      return <ClearNightIcon {...props} />;
    case EWeatherCodes.MAINLY_CLEAR:
      if (isDay) return <MainlyClearDayIcon {...props} />;
      return <MainlyClearNightIcon {...props} />;
    case EWeatherCodes.PARTLY_CLOUDY:
      if (isDay) return <PartlyCloudyDayIcon {...props} />;
      return <PartlyCloudyNightIcon {...props} />;
    case EWeatherCodes.OVERCAST:
      if (isDay) return <OvercastDayIcon {...props} />;
      return <OvercastNightIcon {...props} />;
    case EWeatherCodes.FOG:
      if (isDay) return <FogDayIcon {...props} />;
      return <FogNightIcon {...props} />;
    case EWeatherCodes.DEPOSTING_RIME_FOG:
      if (isDay) return <DepostingRimeFogDayIcon {...props} />;
      return <DepostingRimeFogNightIcon {...props} />;
    case EWeatherCodes.LIGHT_DRIZZLE:
      if (isDay) return <LightDrizzleDayIcon {...props} />;
      return <LightDrizzleNightIcon {...props} />;
    case EWeatherCodes.MODERATE_DRIZZLE:
      if (isDay) return <ModerateDrizzleDayIcon {...props} />;
      return <ModerateDrizzleNightIcon {...props} />;
    case EWeatherCodes.DENSE_INTENSITY_DRIZZLE:
      if (isDay) return <DenseIntensityDrizzleDayIcon {...props} />;
      return <DenseIntensityDrizzleNightIcon {...props} />;
    case EWeatherCodes.LIGHT_FREEZING_DRIZZLE:
      if (isDay) return <LightFreezingDrizzleDayIcon {...props} />;
      return <LightFreezingDrizzleNightIcon {...props} />;
    case EWeatherCodes.HEAVY_INTENSITY_FREEZING_DRIZZLE:
      if (isDay) return <HeavyIntesityFreezingDrizzleDayIcon {...props} />;
      return <HeavyIntesityFreezingDrizzleNightIcon {...props} />;
    case EWeatherCodes.SLIGHT_RAIN:
      if (isDay) return <SlightRainDayIcon {...props} />;
      return <SlightRainNightIcon {...props} />;
    case EWeatherCodes.MODERATE_RAIN:
      if (isDay) return <ModerateRainDayIcon {...props} />;
      return <ModerateRainNightIcon {...props} />;
    case EWeatherCodes.HEAVY_INTENSITY_RAIN:
      if (isDay) return <HeavyIntesityRainDayIcon {...props} />;
      return <HeavyIntesityRainNightIcon {...props} />;
    case EWeatherCodes.LIGHT_FREEZING_RAIN:
      if (isDay) return <LightFreezingRainDayIcon {...props} />;
      return <LightFreezingRainNightIcon {...props} />;
    case EWeatherCodes.HEAVY_INTENSITYE_FREEZING_RAIN:
      if (isDay) return <HeavyIntesityFreezingRainDayIcon {...props} />;
      return <HeavyIntesityFreezingRainNightIcon {...props} />;
    case EWeatherCodes.SLIGHT_SNOW_FALL:
      if (isDay) return <SlightSnowFallDayIcon {...props} />;
      return <SlightSnowFallNightIcon {...props} />;
    case EWeatherCodes.MODERATE_SNOW_FALL:
      if (isDay) return <ModerateSnowFallDayIcon {...props} />;
      return <ModerateSnowFallNightIcon {...props} />;
    case EWeatherCodes.HEAVY_INTENSITY_SNOW_FALL:
      if (isDay) return <HeavyIntesitySnowFallDayIcon {...props} />;
      return <HeavyIntesitySnowFallNightIcon {...props} />;
    case EWeatherCodes.SNOW_GRAINS:
      if (isDay) return <SnowGrainsDayIcon {...props} />;
      return <SnowGrainsNightIcon {...props} />;
    case EWeatherCodes.SLIGHT_RAIN_SHOWERS:
      if (isDay) return <SlightRainShowersDayIcon {...props} />;
      return <SlightRainShowersNightIcon {...props} />;
    case EWeatherCodes.MODERATE_RAIN_SHOWERS:
      if (isDay) return <ModerateRainShowersDayIcon {...props} />;
      return <ModerateRainShowersNightIcon {...props} />;
    case EWeatherCodes.VIOLENT_SHOWERS_RAIN:
      if (isDay) return <ViolentShowersRainDayIcon {...props} />;
      return <ViolentShowersRainNightIcon {...props} />;
    case EWeatherCodes.VIOLENT_SHOWERS_RAIN:
      if (isDay) return <ViolentShowersRainDayIcon {...props} />;
      return <ViolentShowersRainNightIcon {...props} />;
    case EWeatherCodes.HEAVY_SNOW_SHOWERS:
      if (isDay) return <HeavySnowShowersDayIcon {...props} />;
      return <HeavySnowShowersNightIcon {...props} />;
    case EWeatherCodes.THUNDERSTORM:
      if (isDay) return <ThunderstormDayIcon {...props} />;
      return <ThunderstormNightIcon {...props} />;
    case EWeatherCodes.THUNDERSTORM_WITH_SLIGHT_HAIL:
      if (isDay) return <ThunderstromWithSlightHailDayIcon {...props} />;
      return <ThunderstromWithSlightHailNightIcon {...props} />;
    case EWeatherCodes.THUNDERSTORM_WITH_HEAVY_HAIL:
      if (isDay) return <ThunderstromWithHeavyHailDayIcon {...props} />;
      return <ThunderstromWithHeavyHailNightIcon {...props} />;
    case EWeatherCodes.SLIGHT_SNOW_SHOWERS:
      if (isDay) return <SlightSnowShowersDayIcon {...props} />;
      return <SlightSnowShowersNightIcon {...props} />;
    case EWeatherCodes.SLIGHT_SNOW_SHOWERS:
      if (isDay) return <SlightSnowShowersDayIcon {...props} />;
      return <SlightSnowShowersNightIcon {...props} />;

    default:
      return <></>;
  }
};
