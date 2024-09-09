import { Header } from "@/widgets/Header";
import { RecentLocations } from "@/widgets/recent_locations";
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
    <div className="bg-gray min-h-screen flex flex-col items-stretch items-center">
      <section
        style={{ backgroundImage: 'url("/background.jpg")' }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <Header />
        <section className="md:max-w-5xl w-full px-3 mx-auto">
          <RecentLocations />
        </section>
      </section>
    </div>
  );
};

export default Main;
