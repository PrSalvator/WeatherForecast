import { findCityInstance } from "@/shared/instance";
import { ICityDto } from "@/entities/city";

export const findCity = async (
  cityName: string
): Promise<ICityDto[]> => {
  try {
    // const response = await findCityInstance.get("", {
    //   params: {
    //      q: cityName
    //   }
    // });

    // return response.data;
    return new Promise((res) => {
      setTimeout(() => {
        res([
          {
            name: "Tomsk",
            country: "RU",
            lat: 56.49,
            lon: 84.97,
            state: "Tomskaya oblast"
          }
        ])
      }, 500)
    })
  } catch (e) {
    throw e;
  }
};
