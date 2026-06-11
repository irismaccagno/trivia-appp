const BASE_URL = `${process.env.REACT_APP_API_URL}/api.php`; // URL base para las llamadas a la API, obtenida de las variables de entorno

export const fetchPreguntas = async (categoria, dificultad) => { // Función para obtener las preguntas de la API según la categoría y dificultad seleccionadas
  const url = `${BASE_URL}?amount=5&category=${categoria}&difficulty=${dificultad}&type=multiple&encode=url3986`; // Construcción de la URL para la llamada a la API con los parámetros necesarios
  const res = await fetch(url); // Llamada a la API para obtener las preguntas
  const data = await res.json(); // Conversión de la respuesta a formato JSON
  return data.results; // Retorno de las preguntas obtenidas de la API
};