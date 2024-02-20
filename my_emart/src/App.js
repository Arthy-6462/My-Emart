import logo from './logo.svg';
import './App.css';
import Header from './stores/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routerr from './stores/components/Routerr';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routerr/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
