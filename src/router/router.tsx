import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Home from "../components/pages/home/Home.tsx";
import About from "../components/pages/about/About.tsx";
import Contact from "../components/pages/contact/Contact.tsx";
import Layout from "../components/layout/Layout";
import Devquarium from "../components/Projects/devquarium/Devquarium";
import Projects from "../components/pages/projects/Projects.tsx";
import Terminal from "../components/Projects/terminal/Terminal";
import MonsterCompendium from "../components/Projects/dnd/MonsterCompendium.tsx";
import BobRossGallery from "../components/Projects/bobross/BobRossGallery.tsx";
import TarotReader from "../components/Projects/tarot/TarotReader.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/devquarium",
        element: <Devquarium />,
      },
      {
        path: "/terminal",
        element: <Terminal />,
      },
      {
        path: "/monstercompendium",
        element: <MonsterCompendium />,
      },
      {
        path: "/bobrossgallery",
        element: <BobRossGallery />,
      },
      {
        path: "/tarotreader",
        element: <TarotReader />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
