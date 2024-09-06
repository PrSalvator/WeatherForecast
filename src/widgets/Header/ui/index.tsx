import { CityList } from "@/features/city_list";
import { SearchString } from "@/shared/components/SearchString";
import { useSearchStringPresenter } from "@/widgets/Header";
import { SunIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

interface IHeaderProps {
  showCurrentCity?: boolean;
}

export const Header = ({ showCurrentCity = false }: IHeaderProps) => {
  const { onChange, isPending, data, onFocus, onBlur, cityListVisibility } =
    useSearchStringPresenter();
  return (
    <div className="bg-black py-3">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex space-x-2">
          <SunIcon className="size-10 text-blue" />
          <h1 className="text-[24px] text-white font-semibold">
            WeatherForecast
          </h1>
        </div>
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
    </div>
  );
};
