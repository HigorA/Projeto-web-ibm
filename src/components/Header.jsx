import logo from "../img/nextideia.png"
import Menu from "./Menu"

export default function Header() {
    return(
        <header>
            <img src={logo} alt="" />
            <Menu/>
        </header>
    )
}