import { SectionCadastro } from "../style/styled";
import camera from '.././img/camera1.png'
export default function Cadastro() {
    return(
        <SectionCadastro>
            <h1>Cadastro</h1>
            <form action="">
                <div className="upload-imagem">
                    <label htmlFor="image" className="upload"><img src={camera} alt="" /></label>
                    <input type="file" name="image" id="image" />
                </div>

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

                <input type="submit" value="Cadastrar" className="botao"/>
                <input type="reset" value="Limpar" className="botao"/>
            </form>
        </SectionCadastro>

    )
}