import { SectionCadastro } from "../style/styled";

export default function CadastrarVaga() {

    return(
        <SectionCadastro>
            <h1>Cadastro de Vaga</h1>
            <form action="">

                <label htmlFor="">Titulo da vaga</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Descição</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Localidade</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Modalidade</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Competencias Exigidas</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <input type="submit" value="Cadastrar" className="botao"/>
                <input type="reset" value="Limpar" className="botao"/>
            </form>
    </SectionCadastro>
    )
}