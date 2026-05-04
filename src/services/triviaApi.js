const BASE_URL = "https://opentdb.com/api.php";

export const fetchPreguntas = async (categoria, dificultad) => {
  const url = `${BASE_URL}?amount=5&category=${categoria}&difficulty=${dificultad}&type=multiple&encode=url3986`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};