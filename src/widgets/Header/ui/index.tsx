import { SearchString } from "@/features/search_string";
import { SunIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <div className="bg-black py-3">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex space-x-2">
          <SunIcon className="size-10 text-blue" />
          <h1 className="text-[24px] text-white font-semibold">
            WeatherForecast
          </h1>
        </div>
        <SearchString width="w-[400px]"/>
      </div> 
    </div>
  );
};
