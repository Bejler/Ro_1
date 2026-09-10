const MI_NUMERO = "56933755577";

const planes = document.querySelectorAll(".plan");
const aviso = document.getElementById("aviso");
let elegido = null;

planes.forEach((plan) => {
  const boton = plan.querySelector(".elegir");

  boton.addEventListener("click", () => {
    const yaEstaba = plan.classList.contains("activo");

    planes.forEach((p) => {
      p.classList.remove("activo");
      const b = p.querySelector(".elegir");
      b.textContent = "Me tinca este";
      b.setAttribute("aria-pressed", "false");
    });

    if (yaEstaba) {
      elegido = null;
    } else {
      plan.classList.add("activo");
      boton.textContent = "Este es";
      boton.setAttribute("aria-pressed", "true");
      elegido = plan.dataset.plan;
    }

    aviso.textContent = "";
  });
});

function mandarWhatsApp(texto) {
  window.open(
    `https://wa.me/${MI_NUMERO}?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
}

document.getElementById("mandar").addEventListener("click", () => {
  if (!elegido) {
    aviso.textContent = "Marca primero uno de los panoramas.";
    return;
  }
  mandarWhatsApp(`Ya, elegí: ${elegido}`);
});

document.getElementById("eligeTu").addEventListener("click", () => {
  mandarWhatsApp("Me tincan todos, elige tú nomás 😄");
});
