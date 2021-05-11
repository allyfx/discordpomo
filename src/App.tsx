import { Footer } from "components/Footer";
import { Login } from "pages/Login";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="main_container">
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
