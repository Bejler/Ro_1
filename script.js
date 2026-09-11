// ---------- CONFIGURACIÓN ----------
const MI_NUMERO   = "56933755577";                 // tu WhatsApp
const CANCION_ID  = "2hkJ7fYPM5V27pjxiPG2gg";      // Aire — Los Cafres

// ---------- MÚSICA ----------
let reproductor = null;
let yaPartio = false;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  IFrameAPI.createController(
    document.getElementById("embed-spotify"),
    { uri: `spotify:track:${CANCION_ID}`, width: "100%", height: 80 },
    (controlador) => { reproductor = controlador; }
  );
};

const botonPartir = document.getElementById("partir");
const barraMusica = document.getElementById("musica");

botonPartir.addEventListener("click", () => {
  if (reproductor) reproductor.play();   // arranca en 0:00
  if (!yaPartio) {
    yaPartio = true;
    barraMusica.classList.add("visible");
    botonPartir.classList.add("sonando");
    botonPartir.textContent = "Sonando · Aire";
  }
});

// ---------- CONFIRMAR ----------
document.getElementById("confirmar").addEventListener("click", () => {
  const texto = "Ya, nos vemos el sábado 🙌";
  window.open(
    `https://wa.me/${MI_NUMERO}?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
});
