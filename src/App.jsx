import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/footer/footer';



const App = () => {
  return (

    <div className="container-geral">
      <Header />


      <Outlet />


      <Footer />

    </div>

  );
}

export default App;