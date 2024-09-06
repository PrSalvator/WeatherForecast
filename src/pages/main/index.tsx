import { WEATHER_CODES } from "@/features/weather_codes_map";
import { useImage } from "@/shared/hooks/useImage";
import { Header } from "@/widgets/Header";

const Main = () => {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     console.log(pos.coords.latitude, "lat");
  //     console.log(pos.coords.longitude, "lon");
  //   });
  // } else {
  //   console.log("Геолокация выключена на компьютере");
  // }
  const codes = [];
  for (let code of WEATHER_CODES.values()) {
    codes.push(code);
  }
  return (
    <div>
      <Header />
      <section className="max-w-5xl mx-auto">
        <p>Ндавние места</p>
        <div>
        </div>
      </section>
    </div>
  );
};

export default Main;
