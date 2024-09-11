import { RecentLocation } from "@/widgets/recent_locations";
import { useRecentLocatiosPresenter } from "@/widgets/recent_locations";

export const RecentLocations = () => {
  const { data } = useRecentLocatiosPresenter();

  return (
    <div>
      <p className="text-white font-thin mb-4">НЕДАВНИЕ МЕСТОПОЛОЖЕНИЯ</p>
      <div className="flex space-x-3">
        {data.map((d, index) => (
          <RecentLocation key={index} city={d.city} weather={d.data} isPending={d.isPending}/>
        ))}
      </div>
    </div>
  );
};
