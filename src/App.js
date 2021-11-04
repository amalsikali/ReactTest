import logo from "./logo.svg";
import "./App.css";
import Cards from "./Components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./Components/Category";
function App() {
  return (
    <div className>
      <Category />
      <Cards />
    </div>
  );
}

export default App;
