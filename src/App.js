import { useState } from "react";
import { fetchPreguntas } from "./services/triviaApi";
import ConfigScreen from "./components/ConfigScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

function App() {
  const [pantalla, setPantalla]       = useState("inicio");
  const [categoria, setCategoria]     = useState("9");
  const [dificultad, setDificultad]   = useState("easy");
  const [preguntas, setPreguntas]     = useState([]);
  const [indice, setIndice]           = useState(0);
  const [puntaje, setPuntaje]         = useState(0);
  const [seleccionada, setSeleccionada] = useState(null);

  const handleJugar = async () => {
    const data = await fetchPreguntas(categoria, dificultad);
    setPreguntas(data);
    setIndice(0);
    setPuntaje(0);
    setSeleccionada(null);
    setPantalla("quiz");
  };

  const handleSeleccionar = (opcion) => {
    if (seleccionada) return; // ya respondió
    setSeleccionada(opcion);
    if (opcion === preguntas[indice].correct_answer) {
      setPuntaje((prev) => prev + 10);
    }
  };

  const handleSiguiente = () => {
    const esUltima = indice === preguntas.length - 1;
    if (esUltima) {
      setPantalla("resultado");
    } else {
      setIndice((prev) => prev + 1);
      setSeleccionada(null);
    }
  };

  return (
    <div className="container">
              
      <h1>Trivia</h1>

      {pantalla === "inicio" && (
        <ConfigScreen
          categoria={categoria}
          dificultad={dificultad}
          onCategoriaChange={setCategoria}
          onDificultadChange={setDificultad}
          onJugar={handleJugar}
        />
      )}

      {pantalla === "quiz" && preguntas.length > 0 && (
        <GameScreen
          preguntas={preguntas}
          indice={indice}
          puntaje={puntaje}
          seleccionada={seleccionada}
          onSeleccionar={handleSeleccionar}
          onSiguiente={handleSiguiente}
        />
      )}

      {pantalla === "resultado" && (
        <ResultScreen
          puntaje={puntaje}
          total={preguntas.length}
          onReiniciar={handleJugar}
          onSalir={() => setPantalla("inicio")}
        />
      )}
    </div>
  );
}

export default App;