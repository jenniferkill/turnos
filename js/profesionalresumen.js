const profesional= localStorage.getItem("profesional")
const objprofesional= JSON.parse(profesional)
const resumen = document.getElementById("resumen")
const boton = document.getElementById("inicio")




document.addEventListener("DOMContentLoaded", () =>{
  confirmarTurno()
})

const confirmarTurno = ()=>{
    resumen.innerHTML += `
      <div class="card ">
      <div class="card-header">${objprofesional.nombre} </div>
      <div class="card-body">
        <p class="card-text">Telefono: ${objprofesional.telefono}</p>
        <p class="card-text">E-mail: ${objprofesional.email}</p>
        <p class="card-text">Dias disponibles: ${objprofesional.dias}</p>
        <p class="card-text"> Horas disponibles: ${objprofesional.horarios}</p>
      </div>
    </div>
    `
}
boton.addEventListener('click', (e) => {
  window.location.href = "../index.html"
})
