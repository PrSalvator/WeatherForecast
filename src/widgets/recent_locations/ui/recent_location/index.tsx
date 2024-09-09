import { ICityDto } from "@/entities/city";
import { WeatherIcon } from "@/shared/components/weather_icon";
import { useRecentLocationPresenter } from "@/widgets/recent_locations/ui/recent_location/presenter";

interface IRecentLocation {
  city: ICityDto;
}

export const RecentLocation = ({ city }: IRecentLocation) => {
  const { isPending, data } = useRecentLocationPresenter(city);

  if (!isPending && data)
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
              weatherCode={data.weather_code}
              isDay={data.is_day}
              height="50px"
              width="50px"
            />
            <h1 className="text-[30px] font-normal">
              {data.temperature}°<span className="relative text-[14px] left-[-10px] font-semibold opacity-60">C</span>
            </h1>
          </section>
        </section>
        <p>По ощущениям {data.apparent_temperature}°</p>
      </div>
    );
};
