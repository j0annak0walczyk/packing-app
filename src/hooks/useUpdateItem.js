import { useMutation, useQueryClient } from "react-query";
import { updateItem as updateItemApi } from "../services/apiItems";
import toast from "react-hot-toast";

export function useUpdateItem() {
  const queryClient = useQueryClient();
  const {
    mutate: updateItem,
    isLoading: isUpdating,
    refetch,
  } = useMutation({
    mutationFn: updateItemApi,
    onSuccess: () => {
      toast.success("Item successfully updated");
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateItem, isUpdating, refetch };
}
