import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import FAQ from "./pages/FAQ";

import Inicial from "./pages/Inicial";
import Login from './pages/Login'
import Sobre from "./pages/Sobre";
import Vagas from "./pages/Vagas";
import './App.css'

export default function App() {
    return (
        <>  
            
            <BrowserRouter>
                <Header/>
                <Routes>                
                    <Route path='/' element={<Inicial/>}/>
                    <Route path='Login' element={<Login/>}/>
                    <Route path='Vagas' element={<Vagas/>}/>
                    <Route path='Sobre' element={<Sobre/>}/>
                    <Route path='Cadastro' element={<Cadastro/>}/>
                    <Route path='FAQ' element={<FAQ/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}