import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Homescreen from "./screen/Homescreen.jsx";
import Loginscreen from "./screen/loginscreen.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import RegisterScreen from "./screen/Registerscreen.jsx";
import ProfileScreen from "./screen/Profilescreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Homescreen />} />
      <Route path="/login" element={<Loginscreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
