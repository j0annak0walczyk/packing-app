import { useQuery } from "react-query";
import { getTripsList } from "../services/apiTrips";

export function useTripsList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["trips"],
    queryFn: () => getTripsList(),
  });

  return { isLoading, error, data, refetch };
}
