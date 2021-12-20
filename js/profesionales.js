const temTratar = document.getElementById("template-Tratamiento").content
const domTratar = document.getElementById("domTratar")
const temDias = document.getElementById("template-dias").content
const domDias = document.getElementById("domDias")
const temHora = document.getElementById("template-horario").content
const domHora= document.getElementById("domHorarios")
const formProfesional = document.getElementById('altaProfesional')
const fragment = document.createDocumentFragment()
let profesionales = []; 
let tratamientosDis = []
let diasDis = []
let horariosDis =[]


function clear(){
  document.getElementById('altaProfesional').reset();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTrata()
  fetchDia ()
  fetchHora()
});
const fetchTrata = async () =>{
  const response = await fetch('../json/tratamientos.json')
  const tratar = await response.json()
  agregartratamientos(tratar)
}
const fetchDia = async () =>{
  const response = await fetch('../json/dias.json')
  const dia = await response.json()
  agregarDias(dia)
}
const fetchHora = async () =>{
  const response = await fetch('../json/horario.json')
  const hora = await response.json()
  agregarHorarios(hora)
}

const agregartratamientos = tratar => {
  tratar.forEach(item =>{
    temTratar.querySelector('input').name = "tratamiento"
    temTratar.querySelector('input').value = item.id
    temTratar.querySelector('label').textContent=item.titulo
    temTratar.querySelector('input').dataset.id = item.titulo 
    const clone = temTratar.cloneNode(true)
    fragment.appendChild(clone)
  });
  domTratar.appendChild(fragment)
}
const agregarDias = dia => {
  dia.forEach(dia=>{
    temDias.querySelector('input').name= "dia"
    temDias.querySelector('input').value = dia.id
    temDias.querySelector('label').textContent = dia.dias
    temDias.querySelector('input').dataset.id = dia.dias
    const clone = temDias.cloneNode(true)
    fragment.appendChild(clone)
  });
  domDias.appendChild(fragment)
}

const agregarHorarios = hora =>{
  hora.forEach(horario =>{
    temHora.querySelector('input').name = "hora"
    temHora.querySelector('input').value = horario.id
    temHora.querySelector('label').textContent = horario.hora
    temHora.querySelector('input').dataset.id = horario.hora
    const clone = temHora.cloneNode(true)
    fragment.appendChild(clone)
  });
  domHora.appendChild(fragment)
}

formProfesional.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Selecion1 = document.querySelectorAll('input[name="tratamiento"]:checked')
    Selecion1.forEach((checkbox) => {
      tratamientosDis.push(checkbox.dataset.id);
    });

    const Selecion2 = document.querySelectorAll('input[name="dia"]:checked')

    Selecion2.forEach((checkbox) => {
      diasDis.push(checkbox.dataset.id);
    });
    
    const Selecion3 = document.querySelectorAll('input[name="hora"]:checked')

    Selecion3.forEach((checkbox) => {
      horariosDis.push(checkbox.dataset.id);
    });
    /*console.log(tratamientosDis)
    console.log(diasDis)
    console.log(horariosDis)*/


    let datosProfesional = new FormData(e.target)
    let profesional = new Profesional (datosProfesional.get("dni"),datosProfesional.get("nombre"),datosProfesional.get("telefono"),datosProfesional.get("email"),tratamientosDis, datosProfesional.get("profesional"),diasDis,horariosDis)
    
    
    // ingresar informacion en el local storage
    clear()
    localStorage.setItem("profesional",JSON.stringify(profesional))
    window.location.href = "./profesionalresumen.html"
  })

 

  




