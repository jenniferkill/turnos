const dniProf = localStorage.getItem("profesional")
const objprof= JSON.parse(dniProf)
const diaProf= objprof.dias
const horarioprof= objprof.horarios
const templatedia= document.getElementById("template-dias").content
const templatehorario= document.getElementById("template-horario").content
const domdia = document.getElementById("dias")
const domhorario = document.getElementById("horario")
const formTurno = document.getElementById("turnos")
const confirmacion = document.getElementById("confirmar")
const fragment= document.createDocumentFragment()
const dia = []
const hora = []

document.addEventListener("DOMContentLoaded", () =>{
    agregarDias(diaProf)
    agregarHorario(horarioprof)
})
const agregarDias = diaProf =>{
    
    diaProf.forEach(dia=> {
        templatedia.querySelector('input').name = "dia"
        templatedia.querySelector('input').value = dia
        templatedia.querySelector('label').textContent=dia
        templatedia.querySelector('input').dataset.id = `posicion${dia}`       
        const clone = templatedia.cloneNode(true)
        fragment.appendChild(clone)
    });
    domdia.appendChild(fragment)

}
const agregarHorario = horarioprof =>{
    
    horarioprof.forEach(horarios => {
        templatedia.querySelector('input').name = "horario"
        templatedia.querySelector('input').value = horarios
        templatedia.querySelector('label').textContent= horarios
        templatedia.querySelector('input').dataset.id = `posicion${horarios}`
        const clone = templatedia.cloneNode(true)
        fragment.appendChild(clone)
    });
    domhorario.appendChild(fragment)

}

formTurno.addEventListener("submit", (e) =>{
    e.preventDefault()
    const serleccdia = document.querySelectorAll('input[name="dia"]:checked')
    serleccdia.forEach(checkbox=> {
        localStorage.setItem("dia",checkbox.value);
    });
    const selecchora = document.querySelectorAll('input[name=horario]:checked')
    selecchora.forEach(checkbox =>{
        localStorage.setItem("hora",checkbox.value)
    })
    window.location.href = "./confirmacion.html"
})
