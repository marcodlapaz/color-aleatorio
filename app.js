const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const colorAleatorio = generarColorAleatorio();

  text.innerText = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});

function generarColorAleatorio() {
  let colores = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let indice = Math.floor(Math.random() * 16);
    color += colores[indice];
  }

  return color;
}
