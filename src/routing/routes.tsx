import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Page1 />,
      },
      {
        path: "page-a",
        element: <Page1 />,
      },
      {
        path: "page-b",
        element: <Page2 />,
      },
    ],
  },
];
