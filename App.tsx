import StackNavigator from "./src/navigators";
import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="dark" />
      <StackNavigator />
    </QueryClientProvider>
  );
}
