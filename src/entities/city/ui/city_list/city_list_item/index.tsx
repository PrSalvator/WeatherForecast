import { ICityDto } from "@/entities/city";

interface ICityListItemProps {
  city: ICityDto;
  onClick: (city: ICityDto) => void;
}

export const CityListItem = ({ city, onClick }: ICityListItemProps) => {
  return (
    <div
      className="hover:text-blue cursor-pointer px-3 py-1"
      onClick={() => onClick(city)}
    >
      <h1 className="text-[1.25rem] font-semibold">{city.name}</h1>
      <p className="text-slate-500 font-thin">
        {city.state} {city.country}
      </p>
    </div>
  );
};
