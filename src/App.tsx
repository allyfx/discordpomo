import { ApplicationProvider } from "contexts/ApplicationContext";

import { Routes } from "routes";
import { Footer } from "components/Footer";

import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <ApplicationProvider>
      <GlobalStyles />
      <div className="main_container">
        <Routes />
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
