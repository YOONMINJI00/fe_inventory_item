import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../components/pages/login/Login.js"));
const Staff = lazy(() => import("../components/pages/staff/Staff.js"))
const Weather = lazy(() => import("../components/pages/weather/Weather.jsx"))
const Product = lazy(() => import("../components/pages/product/Product.jsx"))
const ProductDetail = lazy(() => import("../components/pages/product/ProductDetaile.jsx"))
const Event = lazy(() => import("../components/pages/event/Event.jsx"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/staff", exact: true, element: <Staff /> },
      { path: "/weather", exact: true, element: <Weather /> },
      { path: "/product", exact: true, element: <Product /> },
      { path: "/product/detail/:id", exact: true, element: <ProductDetail /> },
      { path: "/event", exact: true, element: <Event /> },
    ],
  },
];

export default ThemeRoutes;
