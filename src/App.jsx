import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Suspense, useState, useContext } from "react";
import { appRoute } from "./router";
import { userContext } from "./context/userContext";

const App = () => {
  const location = useLocation();
  const { user } = useContext(userContext);
  return (
    <>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes location={location}>
          {appRoute.map((route) => {
            if (route.requiresAuth && !user) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Navigate replace to={"/login"} />}
                />
              );
            } else if (!route.requiresAuth && user) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Navigate replace to={"/home"} />}
                />
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            }
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
