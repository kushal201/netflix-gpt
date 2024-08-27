import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
