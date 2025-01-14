import { lazy } from "react";

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const SignIn = lazy(() => import("@/pages/auth/SignIn"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const More = lazy(() => import("@/pages/More"));
const Plants = lazy(() => import("@/pages/Plants"));
const Privacy = lazy(() => import("@/pages/legal/Privacy"));
const Terms = lazy(() => import("@/pages/legal/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/signin",
    element: SignIn,
  },
  {
    path: "/signup",
    element: SignUp,
  },
  {
    path: "/more",
    element: More,
  },
  {
    path: "/plants",
    element: Plants,
  },
  {
    path: "/privacy",
    element: Privacy,
  },
  {
    path: "/terms",
    element: Terms,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
