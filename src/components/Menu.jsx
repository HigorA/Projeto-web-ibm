import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <nav>
            <ul>
                <div className='menu-principal' style={{backgroundColor : "green"}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='Vagas'>Vagas</Link></li>
                    <li><Link to='Sobre'>Sobre</Link></li>
                    <li><Link to='FAQ'>FAQ</Link></li>
                </div>
                <li><Link to='Login'>Login</Link></li>                      
                <li><Link to='Cadastro'>Cadastro</Link></li>
            </ul>
        </nav>
    )
}