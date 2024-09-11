import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchStringPresenter } from "@/features/search_string";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { CityList } from "@/entities/city";

interface ISearchStringProps{
  width: string;
}

export const SearchString = ({width}: ISearchStringProps) => {
  const { onChange, isPending, data, onFocus, onBlur, cityListVisibility } =
    useSearchStringPresenter();
  return (
    <div className={width}>
      <div
        className={`flex h-[35px] items-center space-x-4 text-neutral-700 px-3 bg-white ${
          cityListVisibility ? "rounded-t" : "rounded"
        }`}
      >
        <MagnifyingGlassIcon className="size-5 mt-1" />
        <input
          type="text"
          placeholder="Название города"
          className="outline-0 w-full"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {cityListVisibility && (
        <section className={`absolute bg-white rounded-b overflow-hidden ${width}`}>
          <div className="px-3 flex space-x-1 items-center hover:text-blue bg-slate-100 h-[50px] cursor-pointer">
            <MapPinIcon className="size-4" />
            <p>Use current location</p>
          </div>
          {data && <CityList data={data} />}
        </section>
      )}
    </div>
  );
};
