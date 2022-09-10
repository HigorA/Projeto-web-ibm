
import { NavLink } from "react-router-dom"
import { Nav } from "../style/styled"

export default function Menu() {
    

    return (
        <Nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Vagas'>Vagas</NavLink></li>
                <li><NavLink to='/Sobre'>Sobre</NavLink></li>
                <li><NavLink to='/FAQ'>FAQ</NavLink></li>
            </ul>
        </Nav>
    )
}