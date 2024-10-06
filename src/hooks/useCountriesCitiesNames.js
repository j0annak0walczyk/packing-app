import { useQuery } from "react-query";
import { getCoordsDetails } from "../services/apiCoordsDetails";

export function useCountriesCitiesNames(popupCoords) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["countriesCitiesNames", popupCoords],
    queryFn: async () => {
      if (!popupCoords || popupCoords.length !== 2) {
        return null;
      }
      return await getCoordsDetails(popupCoords);
    },
    enabled: !!popupCoords && popupCoords.length === 2, // Only fetch if popupCoords is valid
    cacheTime: 0, // No caching
  });

  return { isLoading, error, data, refetch };
}
