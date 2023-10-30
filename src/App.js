import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./componentes/Login/Login";
import ListaProductos from "./componentes/ListaProductos/ListaProductos";
import MostrarProducto from "./componentes/MostrarProducto/MostrarProducto";
import DetalleProducto from "./componentes/DetalleProducto/DetalleProducto";
import Registro from "./componentes/Registro/Registro";

function App() {
  return (
    <>
      <BrowserRouter basename="/repo_react">
        <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/listaProductos" element={<ListaProductos />} />
        <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
        <Route path="/producto/:id" element={<MostrarProducto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
