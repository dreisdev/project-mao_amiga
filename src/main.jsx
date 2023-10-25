import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts/Montserrat-Regular.ttf'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Projects from './pages/Projects/projects';
import Gallery from './pages/Gallery/gallery';
import Events from './pages/Events/events';
import Contacts from './pages/Contacts/contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
