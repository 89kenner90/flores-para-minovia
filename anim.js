// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { "text": "Sé mi único", "time": 5 },
  { "text": "Sé mi única persona", "time": 7 },
  { "text": "Sé mi única persona", "time": 9 },
  { "text": "El nombre por el cual quiero llamarte", "time": 12 },
  { "text": "Agarrémonos de las manos y caminemos juntos", "time": 17 },
  { "text": "En una noche lluviosa, en nuestros días solitarios", "time": 22 },
  { "text": "Coloréame con tu luz brillante", "time": 27 },
  { "text": "Daré lo mejor de mí", "time": 32 },
  { "text": "Si me prometes que estaremos juntos", "time": 37 },
  { "text": "Ahora lo creo", "time": 42 },
  { "text": "La, la, la, la, la, canto una canción", "time": 50 },
  { "text": "Yo te estuve buscando, buscando, buscando", "time": 55 },
  { "text": "Mi, oh mi, oh mi, oh mi amor", "time": 60 },
  { "text": "Sé mi único amor", "time": 65 },
  { "text": "Sé mi único amor", "time": 67 },
  { "text": "Sé mi único amor", "time": 69 },
  { "text": "Cada paso que demos", "time": 73 },
  { "text": "Se sentirá tan bien, se sentirá como si estuviéramos bailando", "time": 78 },
  { "text": "Mi, oh mi, oh mi, oh mi amor", "time": 83 },
  { "text": "Sé mi único amor", "time": 88 },
  { "text": "Sé mi único amor", "time": 90 },
  { "text": "Sé mi único amor", "time": 92 },
  { "text": "Sé mi único", "time": 96 },
  { "text": "Sé mi única persona", "time": 98 },
  { "text": "Sé mi única persona", "time": 100 },
  { "text": "Ya no tengo que ocultar mis sentimientos, puedo decir", "time": 104 },
  { "text": "Las palabras que realmente quería decir, decirte que te amo", "time": 109 },
  { "text": "En noches agotadoras, en días tan ocupados", "time": 114 },
  { "text": "Por favor hazme lugar en tu corazón y déjame descansar en él", "time": 119 },
  { "text": "Estaré mejor", "time": 124 },
  { "text": "Si compartes tu corazón conmigo", "time": 129 },
  { "text": "Ahora lo creo", "time": 134 },
  { "text": "La, la, la, la, la, canto una canción", "time": 142 },
  { "text": "Yo te estuve buscando, buscando, buscando", "time": 147 },
  { "text": "Mi, oh mi, oh mi, oh mi amor", "time": 152 },
  { "text": "Sé mi único amor", "time": 157 },
  { "text": "Sé mi único amor", "time": 159 },
  { "text": "Sé mi único amor", "time": 161 },
  { "text": "Mi único, cada vez que te veo", "time": 165 },
  { "text": "Quiero apoyarme en ti, quiero tenerte", "time": 170 },
  { "text": "Con un amor así, incluso el sueño más inmaduro", "time": 175 },
  { "text": "Podría hacerse realidad", "time": 180 },
  { "text": "Ahora lo creo", "time": 185 },
  { "text": "Cada paso que demos", "time": 193 },
  { "text": "Se sentirá tan bien, se sentirá como si estuviéramos bailando", "time": 198 },
  { "text": "Mi, oh mi, oh mi, oh mi amor", "time": 203 },
  { "text": "Sé mi único amor", "time": 208 },
  { "text": "Sé mi único amor", "time": 210 },
  { "text": "Sé mi único amor", "time": 212 },
  { "text": "La, la, la, la, la", "time": 216 },
  { "text": "La, la, la, la, la", "time": 221 },
  { "text": "La, la, la, la, la", "time": 226 },
  { "text": "Mi único", "time": 231 },
  { "text": "Mi única persona", "time": 233 },
  { "text": "Mi única persona", "time": 235 }
]
 
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);