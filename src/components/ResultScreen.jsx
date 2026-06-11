function ResultScreen({ puntaje, total, onReiniciar, onSalir }) {
  return (
    <div> // Componente para mostrar el resultado final de la trivia
      <h2>¡Fin de la trivia!</h2>
      
      <div className="stats-container">
        Puntaje: {puntaje} / {total * 10}
      </div>
      <button className="btn-reiniciar" onClick={onReiniciar}>
        Reiniciar
      </button>
      <button className="btn-salir" onClick={onSalir}>
        Salir
      </button>
    </div>
  );
}

export default ResultScreen;