
import { NavLink } from "react-router-dom"
import { Nav } from "../style/styled"

export default function Menu() {
    

    return (
        <Nav>
            <ul>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/'>Home</NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/Vagas'>Vagas</NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/Sobre'>Sobre</NavLink></li>
                <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='/FAQ'>FAQ</NavLink></li>
            </ul>
        </Nav>
    )
}