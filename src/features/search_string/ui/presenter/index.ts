import { useFindCityPresenter } from "@/entities/city/api/case/findCity/presenter";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useState } from "react";

export const useSearchStringPresenter = () => {
  const [cityListVisibility, setCityListVisibility] = useState(false);
  const { handleFindCity, isPending, data } = useFindCityPresenter();
  const debounceFindCity = useDebounce(handleFindCity, 500);

  const onBlur = () => {
    setCityListVisibility(false);
  };

  const onFocus = () => {
    setCityListVisibility(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = e.target.value;
    debounceFindCity(cityName);
  };

  return { onChange, isPending, data, onFocus, onBlur, cityListVisibility };
};