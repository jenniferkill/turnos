const profesional= localStorage.getItem("profesional")
const usuario = localStorage.getItem("clientes")
const dia = localStorage.getItem("dia")
const hora = localStorage.getItem("hora")
const objprofesional= JSON.parse(profesional)
const objusuario = JSON.parse(usuario)
const card = document.getElementById("resumen")
const boton = document.getElementById("inicio")




document.addEventListener("DOMContentLoaded", () =>{
  confirmarTurno()
})


const confirmarTurno = ()=>{
    card.innerHTML += `
      <div class="card ">
      <div class="card-header">${objusuario[0].nombre} ${objusuario[0].apellido}</div>
      <div class="card-body">
        <p class="card-text">Telefono de Contacto: ${objusuario[0].telefono}</p>
        <p class="card-text">Email de Contacto: ${objusuario[0].email}</p>
        <p class="card-text">Nombre del profesional: ${objprofesional.nombre}</p>
        <p class="card-text">Tratamiento reservado: ${objprofesional.tratamientos}</p>
        <p class="card-text"> Dia: ${dia}   hora: ${hora}</p>
      </div>
    </div>
    `
}
boton.addEventListener('click', (e) => {
  window.location.href = "../index.html"
})
