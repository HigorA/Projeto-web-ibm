import { Inicio } from "../style/styled";
import oportunidade1 from './../img/oportunidade1.png'
import oportunidade2 from './../img/oportunidade2.png'
import oportunidade3 from './../img/oportunidade3.png'

export default function Inicial() {
    return(
        <Inicio>
            <h1 class="titulo-main">Oportunidades para você</h1>
            <section id="section-oportunidades">
                <div className="container">
                    <img src={oportunidade1} alt="" className="imagem-container" />
                    <h3 class="titulo-vaga">Auxiliar administrativo</h3>
                    <p>Sálario: A combinar</p>
                    <p>Modalidade: Presencial</p>
                </div>
                <div className="container">
                    <img src={oportunidade2} alt="" className="imagem-container" />
                    <h3 class="titulo-vaga"><nobr>Estágio Advogado</nobr></h3>
                    <p><nobr>Sálario: A combinar</nobr></p>
                    <p>Modalidade: Presencial</p>
                </div>
                <div className="container">
                    <img src={oportunidade3} alt="" className="imagem-container" />
                    <h3 class="titulo-vaga">Help Desk</h3>
                    <p>Sálario: A combinar</p>
                    <p>Modalidade: Presencial</p>
                </div>
            </section>
        </Inicio>
    )
}