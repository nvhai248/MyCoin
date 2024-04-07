import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import CreatePage from "../pages/create/CreatePage";
import AccessPage from "../pages/access/AccessPage";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { MY_ROUTE } from "./const";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: MY_ROUTE.LANDING, element: <LandingPage /> }],
  },
  {
    path: "/create",
    element: <Layout />,
    children: [{ path: MY_ROUTE.CREATE_WALLET, element: <CreatePage /> }],
  },
  {
    path: "/access",
    element: <Layout />,
    children: [{ path: MY_ROUTE.ACCESS_WALLET, element: <AccessPage /> }],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [{ path: MY_ROUTE.DASHBOARD, element: <Dashboard /> }],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export default router;