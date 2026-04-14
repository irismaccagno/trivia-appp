// Importamos hooks de React
import { useEffect, useState } from "react";

function App() {
  const [pregunta, setPregunta] = useState(""); // estado donde guardamos la pregunta
  useEffect(() => { // esto se ejecuta UNA vez cuando carga la app
    fetch("https://opentdb.com/api.php?amount=1&type=multiple") // pedimos 1 pregunta a la API
      .then(res => res.json()) // convertimos la respuesta a JSON para que JavaScript la entienda
      .then(data => {
        if (!data.results || data.results.length === 0) return; // si no hay preguntas, salimos
        const p = data.results[0]; // guardamos la pregunta que viene de la API
        setPregunta(p.question); // guardamos el dato dentro de la app para poder mostrarlo en pantalla
      });
  }, []); // [] hace que se ejecute solo al inicio

  return ( // lo que se muestra en pantalla
    <div> {/* agrupamos todo dentro de un div */}
      <h1>Trivia</h1> {/* título */}
      <p dangerouslySetInnerHTML={{ __html: pregunta }}></p> {/* mostramos la pregunta dangerouslySetInnerHTML sirve para mostrar texto con formato HTML */}
    </div>
  );
}

export default App; // exportamos para usar en otro aricho, como index.js, muestra el componente app en pantalla