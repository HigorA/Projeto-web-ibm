
import MenuCandidato from "../components/MenuCandidato";
import { Card } from "../style/styled";
import Vaga from '../components/Vaga'
import { NavLink } from "react-router-dom";

export default function Painel() {
    const vagas = [{'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'}]
    
    return (
        <>
            <MenuCandidato/>
            <Card>
                <h2>Venha ver novas Vagas!</h2>
                <Vaga vagas={vagas}/>
            </Card>
            <Card>
                <h2>Quer dar uma olhada no seu Curriculo?</h2>
                <p className="previa">Aqui terá um prévia do curriculo.</p>
                <NavLink to='/Curriculo'>Clique aqui para ver o seu Curriculo!</NavLink>
            </Card>
        </>
    )
}