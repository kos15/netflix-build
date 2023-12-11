import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from "./firebase";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);

function App() {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log("App JS:",userAuth);
      } else {
        // Logged out
        dispatch(logout());
        console.log("App JS else case:");
      }
    });
    return unsubscribe();
  }, [dispatch]);

  return (
    <div className="app">
      <React.StrictMode>
        {username ? <RouterProvider router={router} /> : <LoginScreen />}
      </React.StrictMode>
    </div>
  );
}

export default App;
