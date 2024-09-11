import { ICityDto } from "@/entities/city";
import { getCurrentWeather } from "@/entities/weather/api/slice";
import { CityListItem } from "@/entities/city";

interface ICityListProps {
  data: ICityDto[];
}

export const CityList = ({ data }: ICityListProps) => {
  if (data.length === 0) {
    return <h1 className="px-3">No results found</h1>;
  }

  const onClick = (data: ICityDto) => {
    getCurrentWeather(data).then((data) => console.log(data));
  };

  return (
    <section className="divide-slate-300 divide-y ">
      {data.map((city, index) => (
          <CityListItem city={city} key={index} onClick={onClick} />
      ))}
    </section>
  );
};
