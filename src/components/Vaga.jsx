export default function Vaga(props) {
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>desc: {props.desc}</p>
            <p>modalidade: {}</p>
            <p>Salário: {props.salario}</p>
        </div>
    )
}