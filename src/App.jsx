import { createHashRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from "./router.config";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Background from "./ui/Background/Background";
import Plug from "./pages/Plug/Plug";
import Citizen from "./pages/Citizen/Citizen";
import Developer from "./pages/Developer/Developer.jsx";
import Integrator from "./pages/Integrator/Integrator.jsx";
import ManagementCompany from "./pages/ManagementCompany/ManagementCompany.jsx";
import { useEffect } from "react";

const routes = [
  {
    element: <Background />,
    children: [
      { path: ROUTER.main, element: <MainPage /> },
      { path: ROUTER.plug, element: <Plug /> },
      { path: `${ROUTER.citizen}/:id`, element: <Citizen /> },
      { path: `${ROUTER.developer}/:id`, element: <Developer /> },
      { path: `${ROUTER.integrator}/:id`, element: <Integrator /> },
      {
        path: `${ROUTER.managementCompany}/:id`,
        element: <ManagementCompany />,
      },
    ],
  },
];

function App() {
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener("contextmenu", disableRightClick);

    return () => {
      window.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
