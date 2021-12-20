const domtratamientos = document.getElementById("dom-tratamientos")
const templateTrata = document.getElementById("template-Tratamiento").content
const domprof = document.getElementById("dom-profesionales")
const templateProf = document.getElementById("template-profesionales").content
const fragment = document.createDocumentFragment()

const profesionales=[]
const turno = []
// carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  fetchProfesionales()
  fetchTratamientos()
});

// llama el json de el tratamiento
const fetchTratamientos = async () =>{
  const response = await fetch('../json/tratamientos.json')
  const tratamientos = await response.json()
  traerTratamientos(tratamientos)
}
// llama  en el dom lo del json de tratamientos
const traerTratamientos = tratamientos =>{  
  tratamientos.forEach(tratar => {
    templateTrata.querySelector('h4').textContent = tratar.titulo
    templateTrata.getElementById('descripcion').textContent=tratar.descripcion
    templateTrata.getElementById('procedimiento').textContent=tratar.procedimientos
    templateTrata.getElementById('profTratamientos').dataset.id =tratar.id
    const clone = templateTrata.cloneNode(true)
    fragment.appendChild(clone)
  });
  domtratamientos.appendChild(fragment)
  
}
// llama el json de los profesionales
async function fetchProfesionales() {
  const response = await fetch('../json/profesionales.json')
  const profesional = await response.json()
  llamarProfesionales(profesional)
} 
// guarda los profesionales en el array
const llamarProfesionales = profesional =>{
  profesional.forEach(profe =>{
    profesionales.push(profe)
  })
}
// primer boton de profesionales
domtratamientos.addEventListener('click', e => {
  if(e.target.classList.contains('btnTratar')){
    agregarprof(e)
  } 
  
})
// contruye los profesionales 
const agregarprof = e =>{
  domtratamientos.innerHTML =""
  profesionales.forEach(prof =>{
      if(prof.tratamientos.includes(e.target.parentElement.firstElementChild.innerHTML)){
        templateProf.querySelector('h4').textContent = prof.nombre
        templateProf.querySelector('h6').textContent = prof.profesion
        templateProf.querySelector('p').textContent= prof.email
        templateProf.querySelector('button').dataset.id= prof.dni 
        const clone = templateProf.cloneNode(true)
        fragment.appendChild(clone)
        
      }
    }); 
    domprof.appendChild(fragment)
  
  e.stopPropagation()
}
// segundo boton que lleva a la segunda pagina
domprof.addEventListener('click', e => {


  if(e.target.classList.contains('btnTurno')){
    profesionales.forEach(dniprof=>{
      if(dniprof.dni == e.target.dataset.id){
        localStorage.setItem("profesional",JSON.stringify(dniprof))
      }
    })
     window.location.href = "./Turno.html"
  }
});