import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../services/apiItems";
import toast from "react-hot-toast";

export function useAddItem() {
  const queryClient = useQueryClient();
  const { mutate: addNewItem, isLoading: isAdding } = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      toast.success("New item successfully added");
      queryClient.invalidateQueries({ queryKey: ["items-list"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addNewItem, isAdding };
}
