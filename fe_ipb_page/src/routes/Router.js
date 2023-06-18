// import { lazy } from "react";
// import { Navigate } from "react-router-dom";
// import SSETest from "../components/sse/SSETest.jsx";


// /****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

// /***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Login = lazy(() => import("../components/pages/login/Login.js"));
// const Staff = lazy(() => import("../components/pages/staff/Staff.js"))
// const StaffAdd = lazy(() => import("../components/pages/staff/StaffAdd.jsx"))
// const StaffUpdate = lazy(() => import("../components/pages/staff/StaffUpdate.jsx"))
// const Weather = lazy(() => import("../components/pages/weather/Weather.jsx"))
// const Product01 = lazy(() => import("../components/pages/product/Product.jsx"));
// const ProductAdd = lazy(() => import("../components/pages/product/ProductAdd.jsx"));
// const ProductInfoAdd = lazy(() => import("../components/pages/product/ProductInfoAdd.jsx"));
// const ProductInfoList = lazy(() => import("../components/pages/product/ProductInfoList.jsx"));
// const ProductInfoDetail = lazy(() => import("../components/pages/product/ProductInfoDetail.jsx"))
// // const ProductDetail = lazy(() => import("../components/pages/product/ProductDetaile.jsx"))
// const ProductDetail = lazy(() => import("../components/pages/product/ProductDetail.jsx"))
// const StoreProductDetail = lazy(() => import("../components/pages/storeproduct/StoreProductDetail.jsx"))
// const Event = lazy(() => import("../components/pages/event/Event.jsx"))
// const Orders = lazy(() => import("../components/pages/order/Orders.jsx"))
// const OrdersList = lazy(() => import("../components/pages/order/OrdersList.jsx"))
// const StoreAutoOrdersList = lazy(() => import("../components/pages/order/StoreAutoOrdersList.jsx"))
// const StoreProductList01 = lazy(() => import("../components/pages/storeproduct/StoreProductList.jsx"))
// // const StoreExp = lazy(() => import("../components/pages/storeproduct/StoreExp.jsx"))
// const StoreExpMain = lazy(() => import("../components/pages/storeExp/StoreExpMain.jsx"))
// const HeadOfficeOrderList = lazy(() => import("../components/pages/order/HeadOfficeOrderList.jsx"))
// const Store = lazy(() => import("../components/pages/store/Store.jsx"))
// const StoreAdd = lazy(() => import("../components/pages/store/StoreAdd.jsx"))
// const StoreDetail = lazy(() => import("../components/pages/store/StoreDetail.jsx"))
// const StoreSales = lazy(() => import("../components/pages/sales/StoreSales.jsx"))
// const StoreSalesListCategory = lazy(() => import("../components/pages/sales/StoreSalesListCategory.jsx"))
// const Board = lazy(() => import("../components/pages/board/Board.jsx"))
// const HeadOfficeBoard = lazy(() => import("../components/pages/board/HeadOfficeBoard.jsx"))
// const BoardAdd = lazy(() => import("../components/pages/board/BoardAdd.jsx"))
// const BoardDetail = lazy(() => import("../components/pages/board/BoardDetail.jsx"))
// const BoardUpdate = lazy(() => import("../components/pages/board/BoardUpdate.jsx"))
// const BoardEdit = lazy(() => import("../components/pages/board/BoardEdit.jsx"))
// const EventAdd = lazy(() => import("../components/pages/event/EventAdd.jsx"))
// const EventList = lazy(() => import("../components/pages/event/EventList.jsx"))
// const SEETest = lazy(() => import("../components/sse/SSETest.jsx"))
// const EventAutoOrders = lazy(() => import("../components/pages/auto/EventAutoOrders.jsx"))
// // const EventDetail = lazy(() => import("../components/pages/event/EventDetail.jsx"))
// // const EventUpdate = lazy(() => import("../components/pages/event/EventUpdate.jsx"))

// // const BoardAdd = lazy(() => import("../components/pages/board/BoardAdd.jsx"))
// // const EventAdd = lazy(() => import("../components/pages/event/EventAdd.jsx"))
// // const EventList = lazy(() => import("../components/pages/event/EventList.jsx"))


// /*****Routes******/

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/login", exact: true, element: <Login /> },
//       { path: "/staff", exact: true, element: <Staff /> },
//       { path: "/staff/add", exact: true, element: <StaffAdd /> },
//       { path: "/staff/update/:id", exact: true, element: <StaffUpdate /> },
//       { path: "/weather", exact: true, element: <Weather /> },,
//       { path: "/product", exact: true, element: <Product01 /> },
//       { path: "/productinfo/add", exact: true, element: <ProductInfoAdd /> },
//       { path: "/productinfolist", exact: true, element: <ProductInfoList /> },
//       { path: "/productinfo/detail/:id", exact: true, element: <ProductInfoDetail /> },
//       { path: "/product/add", exact: true, element: <ProductAdd /> },
//       { path: "/product/detail/:id", exact: true, element: <ProductDetail /> },
//       { path: "/storeproduct/detail/:id", exact: true, element: <StoreProductDetail /> },
//       { path: "/event", exact: true, element: <Event /> },
//       { path: "/order", exact: true, element: <Orders /> },
//       { path: "/orderslist", exact: true, element: <OrdersList /> },
//       { path: "/storeautoorderslist", exact: true, element: <StoreAutoOrdersList /> },
//       { path: "/storeproductlist", exact: true, element: <StoreProductList01 /> },
//       // { path: "/storeexp", exact: true, element: <StoreExp /> },
//       { path: "/storeexp", exact: true, element: <StoreExpMain /> },
//       { path: "/Hdorderslist", exact: true, element: <HeadOfficeOrderList /> },
//       { path: "/store", exact: true, element: <Store /> },
//       { path: "/store/add", exact: true, element: <StoreAdd /> },
//       { path: "/storedetail/:id", exact: true, element: <StoreDetail /> },
//       { path: "/sales/listbystore", exact: true, element: <StoreSales /> },
//       { path: "/sales/listbystore/category", exact: true, element: <StoreSalesListCategory /> },
//       { path: "/board", exact: true, element: <Board />} ,
//       { path: "/headOffice/board", exact: true, element: <HeadOfficeBoard />} ,
//       { path: "/board/add", exact: true, element: <BoardAdd/>} ,
//       { path: "/board/update/:id", exact: true, element: <BoardUpdate /> },
//       { path: "/boarddetail/:id", exact: true, element: <BoardDetail /> },
//       { path: "/board/edit/:id", exact: true, element: <BoardEdit /> },
//       { path: "/event/eventadd", exact: true, element: <EventAdd/>} ,
//       { path: "/event/eventlist", exact: true, element: <EventList/>} ,
//       { path: "/sse", exact: true, element: <SSETest/>} ,
//       // { path: "/event/eventdetail/:id", exact: true, element: <EventDetail/>} ,
//       // { path: "/event/eventupdate/:id", exact: true, element: <EventUpdate/>} ,
//       // { path: "/board/add", exact: true, element: <BoardAdd/>} ,
//       // { path: "/event/eventadd", exact: true, element: <EventAdd/>} ,
//       // { path: "/event/eventlist", exact: true, element: <EventList/>} ,
//       { path: "/eventautoorders", exact: true, element: <EventAutoOrders/>} ,
//     ],
//   },
// ];

// export default ThemeRoutes;

import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import SSETest from "../components/sse/SSETest.jsx";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter2020 = lazy(() => import("../views/Starter2020.js"));
const About = lazy(() => import("../views/About.js"));
const Login0010 = lazy(() => import("../components/pages/login/Login0010.jsx"));
const Staff = lazy(() => import("../components/pages/staff/Staff.js"))
const StaffAdd = lazy(() => import("../components/pages/staff/StaffAdd.jsx"))
const StaffUpdate = lazy(() => import("../components/pages/staff/StaffUpdate.jsx"))
const Weather = lazy(() => import("../components/pages/weather/Weather.jsx"))
const Product01 = lazy(() => import("../components/pages/product/Product.jsx"));
const ProductAdd = lazy(() => import("../components/pages/product/ProductAdd.jsx"));
const ProductInfoAdd = lazy(() => import("../components/pages/product/ProductInfoAdd.jsx"));
const ProductInfoList = lazy(() => import("../components/pages/product/ProductInfoList.jsx"));
const ProductInfoDetail = lazy(() => import("../components/pages/product/ProductInfoDetail.jsx"))
// const ProductDetail = lazy(() => import("../components/pages/product/ProductDetaile.jsx"))
const ProductDetail = lazy(() => import("../components/pages/product/ProductDetail.jsx"))
const StoreProductDetail2112 = lazy(() => import("../components/pages/storeproduct/StoreProductDetail2112.jsx"))
const Event = lazy(() => import("../components/pages/event/Event.jsx"))
const Orders2210 = lazy(() => import("../components/pages/order/Orders2210.jsx"))
const OrdersList = lazy(() => import("../components/pages/order/OrdersList2220.jsx"))
const StoreAutoOrdersList2230 = lazy(() => import("../components/pages/auto/StoreAutoOrdersList2230.jsx"))
const StoreProductList2110 = lazy(() => import("../components/pages/storeproduct/StoreProductList2110.jsx"))
// const StoreExp = lazy(() => import("../components/pages/storeproduct/StoreExp.jsx"))
const StoreExpMain2120 = lazy(() => import("../components/pages/storeExp/StoreExpMain2120.jsx"))
const StoreExpZero = lazy(() => import("../components/pages/storeExp/StoreExpZero2120.jsx"))
const StoreExpThree = lazy(() => import("../components/pages/storeExp/StoreExpThree2120.jsx"))
const StoreExpFive = lazy(() => import("../components/pages/storeExp/StoreExpFive2120.jsx"))
const StoreExpSeven = lazy(() => import("../components/pages/storeExp/StoreExpSeven2120.jsx"))
const HeadOfficeOrderList = lazy(() => import("../components/pages/order/HeadOfficeOrderList.jsx"))
const Store = lazy(() => import("../components/pages/store/Store.jsx"))
const StoreAdd = lazy(() => import("../components/pages/store/StoreAdd.jsx"))
const StoreDetail = lazy(() => import("../components/pages/store/StoreDetail.jsx"))
const StoreSales = lazy(() => import("../components/pages/sales/StoreSales.jsx"))
const StoreSalesListCategory = lazy(() => import("../components/pages/sales/StoreSalesListCategory.jsx"))
const Board = lazy(() => import("../components/pages/board/Board.jsx"))
const BoardAdd = lazy(() => import("../components/pages/board/BoardAdd.jsx"))
const BoardDetail = lazy(() => import("../components/pages/board/BoardDetail.jsx"))
const BoardUpdate = lazy(() => import("../components/pages/board/BoardUpdate.jsx"))
const BoardEdit = lazy(() => import("../components/pages/board/BoardEdit.jsx"))
const EventAdd = lazy(() => import("../components/pages/event/EventAdd.jsx"))
const EventList = lazy(() => import("../components/pages/event/EventList.jsx"))
const EventDetail = lazy(() => import("../components/pages/event/EventDetail.jsx"))
const SSETest = lazy(() => import("../components/sse/SSETest.jsx"))
const EventAutoOrders2230 = lazy(() => import("../components/pages/auto/EventAutoOrders2230.jsx"))
// const EventDetail = lazy(() => import("../components/pages/event/EventDetail.jsx"))
// const EventUpdate = lazy(() => import("../components/pages/event/EventUpdate.jsx"))

// const BoardAdd = lazy(() => import("../components/pages/board/BoardAdd.jsx"))
// const EventAdd = lazy(() => import("../components/pages/event/EventAdd.jsx"))
// const EventList = lazy(() => import("../components/pages/event/EventList.jsx"))


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter2020 /> },
      { path: "/login", exact: true, element: <Login0010 /> },
      { path: "/staff", exact: true, element: <Staff /> },
      { path: "/staff/add", exact: true, element: <StaffAdd /> },
      { path: "/staff/update/:id", exact: true, element: <StaffUpdate /> },
      { path: "/weather", exact: true, element: <Weather /> },,
      { path: "/product", exact: true, element: <Product01 /> },
      { path: "/productinfo/add", exact: true, element: <ProductInfoAdd /> },
      { path: "/productinfolist", exact: true, element: <ProductInfoList /> },
      { path: "/productinfo/detail/:id", exact: true, element: <ProductInfoDetail /> },
      { path: "/product/add", exact: true, element: <ProductAdd /> },
      { path: "/product/detail/:id", exact: true, element: <ProductDetail /> },
      { path: "/storeproduct/detail/:id", exact: true, element: <StoreProductDetail2112 /> },
      { path: "/event", exact: true, element: <Event /> },
      { path: "/order", exact: true, element: <Orders2210 /> },
      { path: "/orderslist", exact: true, element: <OrdersList /> },
      { path: "/storeautoorders", exact: true, element: <StoreAutoOrdersList2230 /> },
      { path: "/storeproductlist", exact: true, element: <StoreProductList2110 /> },
      // { path: "/storeexp", exact: true, element: <StoreExp /> },
      { path: "/storeexp", exact: true, element: <StoreExpMain2120 /> },
      { path: "/storeexp/0", exact: true, element: <StoreExpZero/> },
      { path: "/storeexp/3", exact: true, element: <StoreExpThree /> },
      { path: "/storeexp/5", exact: true, element: <StoreExpFive /> },
      { path: "/storeexp/7", exact: true, element: <StoreExpSeven /> },
      { path: "/store", exact: true, element: <Store /> },
      { path: "/store/add", exact: true, element: <StoreAdd /> },
      { path: "/storedetail/:id", exact: true, element: <StoreDetail /> },
      { path: "/sales/listbystore", exact: true, element: <StoreSales /> },
      { path: "/sales/listbystore/category", exact: true, element: <StoreSalesListCategory /> },
      { path: "/board", exact: true, element: <Board />} ,
      { path: "/board/add", exact: true, element: <BoardAdd/>} ,
      { path: "/board/update/:id", exact: true, element: <BoardUpdate /> },
      { path: "/boarddetail/:id", exact: true, element: <BoardDetail /> },
      { path: "/board/edit/:id", exact: true, element: <BoardEdit /> },
      { path: "/event/add", exact: true, element: <EventAdd/>},
      { path: "/event/eventlist", exact: true, element: <EventList/>},
      { path: "/event/detail/:id", exact: true, element: <EventDetail/>},
      { path: "/sse", exact: true, element: <SSETest/>} ,
      // { path: "/event/eventdetail/:id", exact: true, element: <EventDetail/>} ,
      // { path: "/event/eventupdate/:id", exact: true, element: <EventUpdate/>} ,
      // { path: "/board/add", exact: true, element: <BoardAdd/>} ,
      // { path: "/event/eventadd", exact: true, element: <EventAdd/>} ,
      // { path: "/event/eventlist", exact: true, element: <EventList/>} ,
      { path: "/eventautoorders", exact: true, element: <EventAutoOrders2230/>} ,
    ],
  },
];

export default ThemeRoutes;
