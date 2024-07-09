import { Provider } from "react-redux";
import { store } from "../app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomThemeProvider from "./ThemeProvider";

const queryClient = new QueryClient();

const AllProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default AllProviders;
