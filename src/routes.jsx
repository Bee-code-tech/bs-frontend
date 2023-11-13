import { CartItem } from "./components";
import {
  Home,
  Blog,
  About,
  Contact,
  Profile,
  Auth,
  UserPanel,
  Barbers,
  BarbersDetails,
  ProductDetails,
  MarketPlace,
  Login,
} from "./pages";
import BlogContent from "./pages/BlogContent";
import Forum from "./pages/Forum";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import MyBarbers from "./pages/MyBarbers";
import MyServices from "./pages/MyServices";
import AppointMents from "./pages/AppointMents";
import Profile_ from "./pages/Profile_"
import DashBlog from "./pages/DashBlog";
import Customers from "./pages/Customers";
import MyStore from "./pages/MyStore";
import SignIn from "./pages/SignIn";

export default [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
    standalone: true
  },
  {
    path: "/barbers",
    component: <Barbers />,
  },
  {
    path: "/login",
    component: <Auth />,
  }, ,
  {
    path: "/signup",
    component: <SignIn />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
  {
    path: "/blog/content",
    component: <BlogContent />,
  },
  {
    path: "/barber/:id",
    component: <BarbersDetails />,
  },
  {
    path: "/product/:id",
    component: <ProductDetails />,
  },
  {
    path: "/marketplace",
    component: <MarketPlace />,
  },
  {
    path: "/login",
    component: <Login />,
    standalone: true
  },
  {
    path: "/forum",
    component: <Forum />,
    standalone: true
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/dashboard",
    component: <UserPanel fragment={<Dashboard />} />,
    standalone: true
  },
  {
    path: "/settings",
    component: <UserPanel fragment={<Settings />} />,
    standalone: true
  },
  {
    path: "/my-barbers",
    component: <UserPanel fragment={<MyBarbers />} />,
    standalone: true
  },
  {
    path: "/services",
    component: <UserPanel fragment={<MyServices />} />,
    standalone: true
  },
  {
    path: "/appointments",
    component: <UserPanel fragment={<AppointMents />} />,
    standalone: true
  },
  {
    path: "/old-profile",
    component: <Profile_ />,
  },
  {
    path: "/profile",
    component: <UserPanel fragment={<Profile />} />,
    standalone: true
  },
  {
    path: "/user/blog",
    component: <UserPanel fragment={<DashBlog />} />,
    standalone: true
  },
  {
    path: "/customers",
    component: <UserPanel fragment={<Customers />} />,
    standalone: true
  },
  {
    path: "/my-store",
    component: <UserPanel fragment={<MyStore />} />,
    standalone: true
  },
]