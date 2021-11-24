let tratamientos = JSON.parse(localStorage.getItem("profesionales"))
let usuarios = JSON.parse(localStorage.getItem("clientes"))
let confirmacion = document.getElementById("resumen")
console.log (tratamientos)
console.log(usuarios)

confirmacion.innerHTML += `
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">confirmacion de turno</h5>
    <p class="card-text">Cliente: ${usuarios[0].nombre} </p>
    <p class="card-text">profesional: ${tratamientos[0].nombre} </p>
  </div>
</div>`

