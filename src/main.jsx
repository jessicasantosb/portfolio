import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import ThemeContextWrapper from "./contexts/ThemeContextWrapper.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeContextWrapper>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ThemeContextWrapper>
  </React.StrictMode>
);
