
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import MyRoutes from "./router/MyRoutes.routes";

function App() {

  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
