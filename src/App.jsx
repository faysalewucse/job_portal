import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AllProviders from "./providers/AllProviders";

const App = () => {
  return (
    <AllProviders>
      <RouterProvider router={router} />
    </AllProviders>
  );
};

export default App;
