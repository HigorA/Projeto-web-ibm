import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import FAQ from "./pages/FAQ";

import Inicial from "./pages/Inicial";
import Login from './pages/Login'
import Sobre from "./pages/Sobre";
import Vagas from "./pages/Vagas";
import PainelCandidato from "./pages/PainelCandidato";
import './App.css'
import Curriculo from "./pages/Curriculo";
import VagasIncritas from "./pages/VagasInscritas";
import PainelRecrutador from "./pages/PainelRecrutador";
import CadastrarVaga from "./pages/CadastrarVaga";

export default function App() {

    const paginas = [{'endereco':'/', 'nome':'Home'},
    {'endereco':'/Vagas', 'nome':'Vagas'},
    {'endereco':'/Sobre', 'nome':'Sobre'},
    {'endereco':'/FAQ', 'nome':'FAQ'}]

    const paginasPainel = [{'endereco':'/Curriculo', 'nome':'Curriculo'},
    {'endereco':'/Vagas', 'nome':'Buscar Vagas'},
    {'endereco':'/Inscricoes', 'nome':'Vagas Inscritas'}]

    return (
        <>  
            
            <BrowserRouter>
                <Header paginas={paginas} paginasPainel={paginasPainel}/>
                <Routes>                
                    <Route path='/' element={<Inicial/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Vagas' element={<Vagas/>}/>
                    <Route path='/Sobre' element={<Sobre/>}/>
                    <Route path='/Cadastro' element={<Cadastro/>}/>
                    <Route path='/FAQ' element={<FAQ/>}/>
                    <Route path="/PainelCandidato" element={<PainelCandidato/>}/>
                    <Route path='/Curriculo' element={<Curriculo/>}/>
                    <Route path='/VagasInscritas' element={<VagasIncritas/>}/>
                    <Route path='/PainelRecrutador' element={<PainelRecrutador/>}/>
                    <Route path='/CadastrarVaga' element={<CadastrarVaga/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}