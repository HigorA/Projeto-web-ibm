import MenuCandidato from "../components/MenuCandidato";
import Vaga from "../components/Vaga";
import { DivSobre, SectionSobre, Card } from "../style/styled";

export default function VagasIncritas() {

    const vagas = [{'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'}]
    
    return(
        <>
            <MenuCandidato/>
            <SectionSobre>
                <DivSobre>
                    <h1>Vagas Inscritas</h1>
                    <p>Aqui irá aparecer as vagas em que o candidato ja se inscreveu.</p>
                </DivSobre>
                <Card>
                <h2>Venha ver novas Vagas!</h2>
                <Vaga vagas={vagas}/>
            </Card>
            </SectionSobre>
        </>
    )
}