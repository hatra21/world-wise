import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";

import { Product } from "./pages/Product";
import { Homepage } from "./pages/Homepage";
import { Pricing } from "./pages/Pricing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import { CityList } from "./components/CityList";
import { CountryList } from "./components/CountryList";
import { City } from "./components/City";
import { Form } from "./components/Form";
import { CityProvider } from "./contexts/CityContext";

export function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index replace element={<Navigate to="cities" />} />
            <Route path="cities" element={<CityList />}></Route>
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}
