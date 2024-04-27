import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CounterPage } from "./CounterPage.tsx";
import { BlogPage } from "./BlogPage.tsx";
//redux imports:
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "counter",
    element: <CounterPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
]);

const rootElement = document.getElementById("root");

rootElement !== null
  ? ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    )
  : null;
