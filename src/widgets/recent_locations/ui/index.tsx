import { useRecentLocatiosPresenter } from "@/widgets/recent_locations/ui/presenter";
import { RecentLocation } from "./recent_location";

export const RecentLocations = () => {
  const { cities } = useRecentLocatiosPresenter();

  return (
    <div>
      <p className="text-white font-thin mb-4">НЕДАВНИЕ МЕСТОПОЛОЖЕНИЯ</p>
      <div className="flex space-x-3">
        {cities.map((city, index) => (
          <RecentLocation key={index} city={city} />
        ))}
      </div>
    </div>
  );
};
