import {  NavCandidato } from "../style/styled";
import { NavLink } from "react-router-dom";

export default function MenuCandidato() {
    return(
        <NavCandidato>
            <ul>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/Curriculo'>Curriculo</NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/VagasInscritas'>Vagas Inscritas</NavLink></li>
            </ul>
        </NavCandidato>
    )
}