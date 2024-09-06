import { CityList } from "@/features/city_list";
import { SearchString } from "@/shared/components/SearchString";
import { useSearchStringPresenter } from "@/widgets/Header";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface IHeaderProps{
  showCurrentCity?: boolean;
}

export const Header = ({showCurrentCity = false}: IHeaderProps) => {
  const { onChange, isPending, data, onFocus, onBlur, cityListVisibility } =
    useSearchStringPresenter();
  return (
    <div className="bg-gray-800 p-3">
      <div
        className={`bg-white w-[300px] ${
          cityListVisibility ? "rounded-t" : "rounded"
        }`}
      >
        <SearchString onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
        {cityListVisibility && (
          <section className="absolute bg-white w-[300px] rounded-b overflow-hidden">
            <div className="px-3 flex space-x-1 items-center hover:text-blue bg-slate-100 h-[50px] cursor-pointer">
              <MapPinIcon className="size-4" />
              <p>Use current location</p>
            </div>
            {data && <CityList data={data} />}
          </section>
        )}
      </div>
    </div>
  );
};
