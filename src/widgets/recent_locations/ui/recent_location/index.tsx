import { ICityDto } from "@/entities/city";
import { IWeatherDto } from "@/entities/weather";
import { WeatherIcon } from "@/shared/components/weather_icon";

interface IRecentLocation {
  city: ICityDto;
  weather?: IWeatherDto;
  isPending: boolean;
}

export const RecentLocation = ({ city, weather, isPending }: IRecentLocation) => {

  if (!isPending && weather)
    return (
      <div className="font-thin p-3 flex flex-col text-white backdrop-blur-md backdrop-brightness-75 rounded-lg cursor-pointer">
        <section>
          <h1 className="text-[24px] font-normal">{city.name}</h1>
          <p>
            {city.state} {city.country}
          </p>
        </section>
        <section className="flex flex-col">
          <section className="flex items-stretch">
            <WeatherIcon
              className="fill-white"
              weatherCode={weather.weather_code}
              isDay={weather.is_day}
              height="50px"
              width="50px"
            />
            <h1 className="text-[30px] font-normal">
              {Math.round(weather.temperature)}°<span className="relative text-[14px] left-[-10px] font-semibold opacity-60">C</span>
            </h1>
          </section>
        </section>
        <p>По ощущениям {Math.round(weather.apparent_temperature)}°</p>
      </div>
    );
};
