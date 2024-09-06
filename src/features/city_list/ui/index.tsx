import { ICityDto } from "@/entities/city";
import { CityListItem } from "@/features/city_list";

interface ICityListProps {
  data: ICityDto[];
}

export const CityList = ({ data }: ICityListProps) => {
  if (data.length === 0) {
    return <h1 className="px-3">No results found</h1>;
  }

  return (
    <section>
      {data.map((city, index) => (
        <>
          <CityListItem data={city} key={index} onClick={(data) => {}} />
          <hr className="mt-1"/>
        </>
      ))}
    </section>
  );
};
