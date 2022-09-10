import { Link } from "react-router-dom";
import { DivLogin, DivForm, SectionLogin } from "../style/styled";
import login from './../img/login.png'
export default function Login() {

    return (
        <SectionLogin>
            <h1>Login</h1>
            <DivLogin>
                <img src={login} alt="" />
            </DivLogin>
            <DivForm>
                <form action="" method="get">
                    <label htmlFor="">E-mail</label>
                    <input type="text" name="" id="" placeholder="email"/>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" placeholder="senha"/>
                </form>
                <Link to='../'><button>Entrar</button></Link>
            </DivForm>
            <p>Não possui login ainda? <Link to='../Cadastro'>Cadastre-se aqui</Link></p>
        </SectionLogin>
    )
}