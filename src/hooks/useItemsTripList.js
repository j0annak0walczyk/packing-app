import { useQuery } from "react-query";
import { getItemsTripList } from "../services/apiItems";
import { useParams } from "react-router-dom";

export function useItemsTripList() {
  const { id: tripId } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItemsTripList(tripId),
  });

  return { isLoading, error, data, refetch };
}
