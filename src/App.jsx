import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "./components/Homepage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
};

export default App;
