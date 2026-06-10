import { useEffect, useState } from "react";

const DIFICULTADES = ["easy", "medium", "hard"];
const LABELS_DIFICULTAD = { easy: "Fácil", medium: "Media", hard: "Difícil" };

function ConfigScreen({ categoria, dificultad, onCategoriaChange, onDificultadChange, onJugar }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(fetch(`${process.env.REACT_APP_API_URL}/api_category.php`))
      .then((res) => res.json())
      .then((data) => setCategorias(data.trivia_categories));
  }, []);

return (
  <div>
    <div className="config-selects">
      <h2>Elegí categoría</h2>
      <select value={categoria} onChange={(e) => onCategoriaChange(e.target.value)}>
        {categorias.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <h2>Dificultad</h2>
      <select value={dificultad} onChange={(e) => onDificultadChange(e.target.value)}>
        {DIFICULTADES.map((d) => (
          <option key={d} value={d}>{LABELS_DIFICULTAD[d]}</option>
        ))}
      </select>
    </div>

    <button className="btn-jugar" onClick={onJugar}>JUGAR</button>
  </div>
);
}

export default ConfigScreen;