import { useMutation, useQueryClient } from "react-query";
import { createNewTrip } from "../services/apiTrips";
import toast from "react-hot-toast";

export function useCreateTrip() {
  const queryClient = useQueryClient();
  const { mutate: createTrip, isLoading: isCreatingTrip } = useMutation({
    mutationFn: createNewTrip,
    onSuccess: () => {
      toast.success("New trip successfully added");
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createTrip, isCreatingTrip };
}
