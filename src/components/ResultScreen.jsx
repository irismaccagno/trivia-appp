function ResultScreen({ puntaje, total, onReiniciar, onSalir }) {
  return (
    <div>
      <h2>¡Fin de la trivia!</h2>
      <p>Puntaje: {puntaje} / {total * 10}</p>
      <button className="btn-reiniciar" onClick={onReiniciar}>Reiniciar</button>
      <button className="btn-salir" onClick={onSalir}>Salir</button>
    </div>
  );
}

export default ResultScreen;