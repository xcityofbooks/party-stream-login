import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { LoginPage } from "./Components/Login-Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
