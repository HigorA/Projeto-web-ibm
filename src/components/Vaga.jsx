import { DivVaga } from "../style/styled";

export default function Vaga(props) {
    return (
        <>
            {props.vagas.map((item)=><DivVaga><h3>{item.titulo}</h3><p>{item.empresa}</p><p>{item.local}</p></DivVaga>)}
        </>
    )
}