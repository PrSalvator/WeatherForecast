import { CityList } from "@/features/city_list";
import { SearchString } from "@/shared/components/SearchString";
import { useSearchStringPresenter } from "@/widgets/Header";

export const Header = () => {
  const { onChange, isPending, data, onFocus, onBlur, cityListVisibility } = useSearchStringPresenter();
  return (
    <div className="bg-gray-800 p-3">
      <div className="bg-white">
        <SearchString onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
        <section className="absolute bg-white w-full">
          {cityListVisibility && <h1>I`m city list</h1>}
          {data && !isPending && cityListVisibility && <CityList data={data}/>}
        </section>
      </div>
    </div>
  );
};
