/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts/Montserrat-Regular.ttf";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";
import Gallery from "./pages/Gallery/gallery";
import Events from "./pages/Events/events";
import Contacts from "./pages/Contacts/contacts";
import Admin from "./pages/Adm/panelAdm";
import AdminProject from "./pages/AdmProjects/panelAdmProjects";
import Login from "./pages/Login/login";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentBoleto from "./components/Stripe/Payment_Boleto.jsx";
import PaymentCard from "./components/Stripe/Payment_Card.jsx";
import PaymentPix from "./components/Stripe/Payment_Pix.jsx";

import ProtectedRoute from "./routes/protectedRoute.jsx";
import { AdminProvider } from "./Context/AdminContext.jsx";
import api from "./api/fetchApi.jsx";
import PanelGalleryAdm from "./pages/AdmGallery/panelAdmGallery.jsx";

const response = await api.get("/config");

const stripePromisse = loadStripe(`${response.data.publishableKey}`);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/adm/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adm/editevent/:id",
        element: (
          <ProtectedRoute redirectTo="/login">
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adm/deleteevent/:id/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <Admin />
          </ProtectedRoute>
        ),
      },

      {
        path: "/adm/project/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <AdminProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adm/editproject/:id",
        element: (
          <ProtectedRoute redirectTo="/login">
            <AdminProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adm/deleteproject/:id/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <AdminProject />
          </ProtectedRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admGallery/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <PanelGalleryAdm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admGallery/deletephotos/:id/*",
        element: (
          <ProtectedRoute redirectTo="/login">
            <PanelGalleryAdm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/boleto",

        element: (
          <Elements stripe={stripePromisse}>
            <PaymentBoleto />
          </Elements>
        ),
      },
      {
        path: "/card",

        element: (
          <Elements stripe={stripePromisse}>
            <PaymentCard />
          </Elements>
        ),
      },
      {
        path: "/pix",
        element: <PaymentPix />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);
