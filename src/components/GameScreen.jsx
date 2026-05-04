import { useMemo } from "react";

// Decodifica el formato url3986 que usa la API
const decode = (str) => decodeURIComponent(str);

// Mezcla un array sin mutar el original
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
  return "incorrecta"; // ← todas las demás se vuelven rojas
};

return (
    <div>
<p>Pregunta {indice + 1} de {preguntas.length} — Puntaje: {puntaje}</p>
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
        <button className="btn-siguiente"  onClick={onSiguiente}>
        {esUltima ? "Ver resultado" : "Siguiente →"}
        </button>
    )}
    </div>
);
}
export default GameScreen;