import { ICityDto } from "@/entities/city";

interface ICityListItemProps {
  data: ICityDto;
  onClick: (data: ICityDto) => void;
}

export const CityListItem = ({ data, onClick }: ICityListItemProps) => {
  return (
    <div
      className="hover:text-blue cursor-pointer px-3"
      onClick={() => onClick(data)}
    >
      <h1 className="text-[1.25rem] font-semibold">{data.name}</h1>
      <p className="text-slate-500 font-thin">
        {data.state} {data.country}
      </p>
    </div>
  );
};
