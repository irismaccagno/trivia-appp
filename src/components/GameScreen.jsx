import { useMemo } from "react";
const decode = (str) => decodeURIComponent(str);
const mezclar = (arr) => [...arr].sort(() => Math.random() - 0.5);

function GameScreen({ preguntas, indice, puntaje, seleccionada, onSeleccionar, onSiguiente }) {
    const pregunta = preguntas[indice];
    const esUltima = indice === preguntas.length - 1;

    const opciones = useMemo(
    () => mezclar([...pregunta.incorrect_answers, pregunta.correct_answer]),
    [pregunta]
);

const getTipo = (opcion) => {
    if (!seleccionada) return "opcion";
    if (opcion === pregunta.correct_answer) return "correcta";
    if (opcion === seleccionada) return "incorrecta";
    return "opcion";
};

return (
    <div>
    <div className="stats-container">
        Pregunta {indice + 1} de {preguntas.length} — Puntaje: {puntaje}
    </div>

    <h2>{decode(pregunta.question)}</h2>

    {opciones.map((opcion) => (
        <button
        key={opcion}
        className={`btn btn-${getTipo(opcion)}`}
        onClick={() => onSeleccionar(opcion)}
        disabled={!!seleccionada}
        >
        {decode(opcion)}
        </button>
    ))}

{seleccionada && (
        <button className="btn-siguiente" onClick={onSiguiente}>
            {esUltima ? "Ver resultado" : "Siguiente →"}
        </button>
    )}
    </div>
);
}

export default GameScreen;