import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SplashPage from "./pages/SplashPage.jsx";
import TypingTest from "./pages/TypingTest.jsx";
import TypingPractice from "./pages/TypingPractice.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SplashPage />}>
        <Route path="/" element={<TypingTest />} />
        <Route path="/practice" element={<TypingPractice />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
