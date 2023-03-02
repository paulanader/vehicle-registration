import { VehicleProvider } from "./hooks/VehicleProvider";
import { PagesRoutes } from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <VehicleProvider>
        <PagesRoutes />
      </VehicleProvider>
    </>
  );
};

export default App;
