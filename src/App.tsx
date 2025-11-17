import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@utils/query-client";
import { RouterProvider } from "react-router-dom";
import { LoadingProvider } from "./contexts/loading-context";
import router from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
