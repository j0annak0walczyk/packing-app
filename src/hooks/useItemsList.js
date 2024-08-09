import { useQuery } from "react-query";
import { getItemsList } from "../services/apiItems";

export function useItemsList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["items-all"],
    queryFn: () => getItemsList(),
  });

  return { isLoading, error, data, refetch };
}
