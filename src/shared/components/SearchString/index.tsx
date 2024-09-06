import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type ISearchStringProps = React.HTMLAttributes<HTMLInputElement>;

export const SearchString = ({ ...args }: ISearchStringProps) => {
  return (
    <div className="flex h-[35px] items-center space-x-4 text-neutral-700 px-3">
      <MagnifyingGlassIcon className="size-5 mt-1" />
      <input
        type="text"
        placeholder="Название города"
        className="outline-0 w-full"
        {...args}
      />
    </div>
  );
};
