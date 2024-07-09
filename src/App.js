import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListadoCompras from './compras/ListadoCompras';
import AgregarCompra from './compras/AgregarCompra';
import EditarCompra from './compras/EditarCompra';
import Navegacion from './plantilla/Navegacion';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoCompras/>} />
          <Route exact path="/crear" element={<AgregarCompra/>} />
          <Route exact path="/editar/:id" element={<EditarCompra/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
