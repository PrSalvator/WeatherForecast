import { Header } from "@/widgets/Header/ui";

const Main = () => {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     console.log(pos.coords.latitude, "lat");
  //     console.log(pos.coords.longitude, "lon");
  //   });
  // } else {
  //   console.log("Геолокация выключена на компьютере");
  // }
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Main;
