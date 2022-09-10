import { NavLink } from 'react-router-dom'
import { Head, LoginDiv, Logo } from '../style/styled'
import log1 from './../img/desenho.png'
import Menu from "./Menu"

export default function Header() {
    return(
        <Head>
            <Logo src={log1} alt="" />
            <Menu/>
            <LoginDiv>
                <NavLink to='/Cadastro'>Cadastre-se</NavLink>
                <NavLink to='/Login'>Login</NavLink>
            </LoginDiv>
        </Head>
    )
}