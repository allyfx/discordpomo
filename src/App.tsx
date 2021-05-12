import { Footer } from "components/Footer";
import { ApplicationProvider } from "contexts/ApplicationContext";
import { Login } from "pages/Login";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <ApplicationProvider>
      <GlobalStyles />
      <div className="main_container">
        <Login />
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
