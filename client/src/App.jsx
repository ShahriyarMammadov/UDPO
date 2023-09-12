import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ROUTES from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    const setThemeColor = (color) => {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", color);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.setAttribute("name", "theme-color");
        newMeta.setAttribute("content", color);
        document.head.appendChild(newMeta);
      }
    };

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const color = prefersDarkMode ? "#450601" : "#AAC8A7";
    setThemeColor(color);
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
