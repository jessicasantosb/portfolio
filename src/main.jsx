import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import ThemeContextWrapper from "./components/contexts/ThemeContextWrapper.jsx";
import { LanguageProvider } from "./components/contexts/LanguageContext.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextWrapper>
    <LanguageProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LanguageProvider>
  </ThemeContextWrapper>
);
