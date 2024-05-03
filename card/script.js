const imagen = document.getElementById("imagen")
const container = document.querySelector(".container")

let volteada = false

let volteando = false

container.addEventListener("click", () => {
  volteando = true
  volteada = !volteada
  const rotateY = volteada ? 180 : 0
  const nuevaImagen = volteada
    ? "french-fries-card.png"
    : "flamelion card.png"
  imagen.src = nuevaImagen
  imagen.style.transform = `perspective(500px) rotateX(0deg) rotateY(${rotateY}deg)`
  volteando = false
})

container.addEventListener("mousemove", (e) => {
  if (volteando == false) {
    const { offsetX, offsetY, target } = e
    const { clientWidth, clientHeight } = target

    const x = offsetX / clientWidth - 0.5
    const y = offsetY / clientHeight - 0.5

    const rotX = -y * 15
    const rotY = x * 15

    imagen.style.transform = `perspective(500px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
  }else{
    console.log("poto")
  }
})
