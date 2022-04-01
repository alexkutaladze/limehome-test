import StackNavigator from "./src/navigators/stack-navigator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
    </QueryClientProvider>
  );
}
