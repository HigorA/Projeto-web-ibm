import MenuCandidato from "../components/MenuCandidato"
import { SectionCadastro } from "../style/styled"

export default function Curriculo() {
    return (
        <>
            <MenuCandidato/>
            <SectionCadastro>
                <h1>Curriculo</h1>
                <form action="">

                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Sobrenome</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">E-mail</label>
                    <input type="e-mail" name="" id="" />

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />

                    <label htmlFor="">Telefone Celular</label>
                    <input type="tel" name="" id="" />

                    <label htmlFor="">Data de Nascimento</label>
                    <input type="date" name="" id="" />

                    <label htmlFor="">Cargo pretendido</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Competencias</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <input type="submit" value="Cadastrar" className="botao"/>
                    <input type="reset" value="Limpar" className="botao"/>
                </form>
            </SectionCadastro>
        </>
    )
}