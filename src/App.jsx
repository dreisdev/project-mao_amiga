import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="container-geral">
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
