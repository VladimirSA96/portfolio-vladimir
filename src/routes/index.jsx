import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import Project from "../pages/project/Project";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;