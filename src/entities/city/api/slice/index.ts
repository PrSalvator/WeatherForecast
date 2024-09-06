import { findCityInstance } from "@/shared/instance";
import { ICityDto } from "@/entities/city";
import { times, random } from "lodash";

export const findCity = async (cityName: string): Promise<ICityDto[]> => {
  try {
    // const response = await findCityInstance.get("", {
    //   params: {
    //      q: cityName
    //   }
    // });

    // return response.data;
    return new Promise((res) => {
      setTimeout(() => {
        res(
          times(random(5), () => ({
            name: "Tomsk",
            country: "RU",
            lat: 56.49,
            lon: 84.97,
            state: "Tomskaya oblast",
          }))
        );
      }, 500);
    });
  } catch (e) {
    throw e;
  }
};
