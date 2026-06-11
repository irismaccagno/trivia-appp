import { useEffect, useState } from "react";

const DIFICULTADES = ["easy", "medium", "hard"];
const LABELS_DIFICULTAD = { easy: "Fácil", medium: "Media", hard: "Difícil" };

function ConfigScreen({ categoria, dificultad, onCategoriaChange, onDificultadChange, onJugar }) {
  const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías obtenidas de la API

  useEffect(() => { // Hook para obtener las categorías de la API al montar el componente
    fetch(`${process.env.REACT_APP_API_URL}/api_category.php`) // Llamada a la API para obtener las categorías
      .then((res) => res.json())
      .then((data) => setCategorias(data.trivia_categories)); 
  }, []);

return (
  <div>
    <div className="config-selects"> // Contenedor para los selectores de categoría y dificultad
      <h2>Elegí categoría</h2>
      <select value={categoria} onChange={(e) => onCategoriaChange(e.target.value)}>
        {categorias.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <h2>Dificultad</h2>
      <select value={dificultad} onChange={(e) => onDificultadChange(e.target.value)}>
        {DIFICULTADES.map((d) => (
          <option key={d} value={d}>{LABELS_DIFICULTAD[d]}</option> // Mapeo de las dificultades para mostrar las opciones en el select
        ))}
      </select>
    </div>

    <button className="btn-jugar" onClick={onJugar}>JUGAR</button>
  </div>
);
}

export default ConfigScreen; // Exportación del componente ConfigScreen para su uso en otras partes de la aplicación