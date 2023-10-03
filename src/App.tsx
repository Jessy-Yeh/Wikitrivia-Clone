import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [streak, setStreak] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home streak={streak} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
