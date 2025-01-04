import { lazy } from "react";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

const SigninPage = lazy(() => import("./pages/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

// const HomePage = lazy(() => import("./pages/HomePage"));

export const appRoute = [
  {
    path: "/",
    component: LandingPage,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: SigninPage,
    requiresAuth: false,
  },
  {
    path: "/signup",
    component: SignupPage,
    requiresAuth: false,
  },
  {
    path: "/home",
    component: HomePage,
    requiresAuth: true,
  },
];
