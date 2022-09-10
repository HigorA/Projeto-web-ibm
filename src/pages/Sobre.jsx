import { DivVantagem, SectionSobre } from "../style/styled";
import seta from './../img/seta.png'
import candidato from './../img/candidato.png'
import empresa from './../img/empresapng.png'

export default function Sobre() {
    return (
        <SectionSobre id="vantagens">
            <h1 class="titulo-main">Vantagens</h1>
        
            <DivVantagem class="vantagens vant">
                <img src={candidato} alt="" class="candidatoEempresa"/>
                <h3 class="titulo-vantagem">Para o Candidato</h3>
                <p class="p-vantagem">Exportação currículo;</p>
                <p class="p-vantagem">Filtros por área e skills;</p>
                <p class="p-vantagem">Linha do tempo para acompanhamento;</p> 
                <p class="p-vantagem">Avaliação do processo seletivo da empresa;</p>
                <p class="p-vantagem">Indicações de oportunidades.</p>
            </DivVantagem>
            <DivVantagem class="vantagens vant">
                <img src={empresa} alt="" class="candidatoEempresa"/>
                <h3 class="titulo-vantagem">Para a Empresa</h3>
                <p class="p-vantagem">Filtragem por skills;</p>
                <p class="p-vantagem">Processos de seleção mais ágeis e rápido;</p>
                <p class="p-vantagem">Alertas profissionais de acordo com a vaga;</p>
                <p class="p-vantagem">Maior visibilidade para empresa através do "Ranking".</p>
            </DivVantagem>
        </SectionSobre>
    )
}