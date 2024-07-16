import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, Signup, AuthLayout, Home } from "./index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          // <AuthLayout >
            <Login />
          // </AuthLayout>/
        ),
      },
      {
        path: "/signup",
        element: (
          // <AuthLayout >
            <Signup />
          // </AuthLayout>
        ),
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// 1)  Lazy Load
// 2)  a: useMemo() ->  handle states using memoize some expensive and time consuming and constant at least two times
//     b: useEffect() -> handle states to prevents unneccesary rerendering component or *eventes*