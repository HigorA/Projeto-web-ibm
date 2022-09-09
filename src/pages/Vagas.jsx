import Vaga from "../components/Vaga";

export default function Vagas() {

    return(
        <section style={{backgroundColor: "yellow"}}>
            <h2>Vagas</h2>
            <Vaga  titulo='Estágio' desc='Conhecimentos basicos em HTML, CSS e Js' modalidade='hibrido' salario='Á combinar'/>
        </section>
    )
}