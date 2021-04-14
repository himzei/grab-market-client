import MainPage from "./main";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
