import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchStringPresenter } from "@/shared/components/SearchString";

export const SearchString = () => {
  const { onChange, data, isPending } = useSearchStringPresenter();
  return (
    <div>
      <div className="flex bg-white h-[35px] rounded w-[400px] items-center px-4 py-2 space-x-4 text-neutral-700">
        <MagnifyingGlassIcon className="size-5" />
        <input
          type="text"
          placeholder="Название города"
          className="outline-0 w-full"
          onChange={onChange}
        />
      </div>
      <div>
        <ul className="bg-white">
          {data?.map((city, index) => (
            <li key={index}>{city.name + " " + city.country + " " + city.state}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
