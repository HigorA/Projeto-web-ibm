import { NavLink } from "react-router-dom";
import { NavCandidato } from "../style/styled";

export default function MenuRecrutador() {
    return (
    
        <NavCandidato>
            <ul>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/CadastrarVaga'>Cadastrar Vaga</NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/Vagas'>Vagas Publicadas</NavLink></li>
            </ul>
        </NavCandidato>
        
    )
}