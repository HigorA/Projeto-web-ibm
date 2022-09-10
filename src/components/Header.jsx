import { NavLink } from 'react-router-dom'
import { Head, LoginDiv, Logo } from '../style/styled'
import logo from './../img/logo.png'
import Menu from "./Menu"

export default function Header(props) {

    return(
        <Head>
            <Logo src={logo} alt="" />
            <Menu pagina={props.paginas} painel={props.paginasPainel}/>
            <LoginDiv>
                <NavLink to='/Cadastro'>Cadastre-se</NavLink>
                <NavLink to='/Login'>Login</NavLink>
            </LoginDiv>
        </Head>
    )
}