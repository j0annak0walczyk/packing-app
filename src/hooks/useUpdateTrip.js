import { useMutation, useQueryClient } from "react-query";
import { updateTrip as updateTripApi } from "../services/apiTrips";
import toast from "react-hot-toast";

function useUpdateTrip() {
  const queryClient = useQueryClient();
  const { mutate: updateTrip, isLoading: isUpdatingTrip } = useMutation({
    mutationFn: updateTripApi,
    onSuccess: () => {
      toast.success("Trip successfully updated");
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateTrip, isUpdatingTrip };
}

export default useUpdateTrip;
