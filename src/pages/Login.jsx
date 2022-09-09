import { Link } from "react-router-dom";

export default function Login() {

    return (
        <section>
            <h1>Login</h1>
            <img src="" alt="" />
            <form action="" method="get">
                <label htmlFor="">E-mail</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Senha</label>
                <input type="password" name="" id="" />
                <button>Entrar</button>
            </form>
            <p>Não possui login ainda? <Link to='../Cadastro'>Cadastre-se aqui</Link></p>
        </section>
    )
}