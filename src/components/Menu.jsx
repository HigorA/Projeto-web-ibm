
import { NavLink } from "react-router-dom"
import { Nav } from "../style/styled"


export default function Menu(props) {
    

    return (
        <Nav>
            <ul>
                {props.pagina.map((item)=><li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to={item.endereco}>{item.nome}</NavLink></li>)}
            </ul>
        </Nav>
    )
}