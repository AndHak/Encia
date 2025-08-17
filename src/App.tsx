
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import MyRoutes from "./router/MyRoutes.routes";
import { verificarActualizacion } from "./updates/checkUpdates";
import { useEffect } from "react";

function App() {
    useEffect(() => {
    verificarActualizacion();
  }, []);

  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
