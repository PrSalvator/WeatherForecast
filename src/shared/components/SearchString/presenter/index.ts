import { useFindCityPresenter } from "@/entities/city/api/case/findCity/presenter";
import { useDebounce } from "@/shared/hooks/useDebounce";

export const useSearchStringPresenter = () => {
  const { handleFindCity, isPending, data } = useFindCityPresenter();
  const debounceFindCity = useDebounce(handleFindCity, 500)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = e.target.value;
    debounceFindCity(cityName)
  };

  return { onChange, isPending, data };
};
