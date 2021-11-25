let formProfesional = document.getElementById('altaProfesional')
let container = document.getElementById('profesionales-container')
let profesionales = [];
let tratamientosDis = []
let diasDis = []
let horariosDis =[]

function clear(){
  document.getElementById("altaProfesional").reset();
}

formProfesional.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Selecion1 = document.querySelectorAll('input[name="tratamientos"]:checked')
    Selecion1.forEach((checkbox) => {
      tratamientosDis.push(checkbox.value);
    });
    const Selecion2 = document.querySelectorAll('input[name="dias"]:checked')
    Selecion2.forEach((checkbox) => {
      diasDis.push(checkbox.value);
    });
    
    const Selecion3 = document.querySelectorAll('input[name="horarios"]:checked')
    Selecion3.forEach((checkbox) => {
      horariosDis.push(checkbox.value);
    });

    let datosProfesional = new FormData(e.target)
    let profesional = new Profesional (datosProfesional.get("dni"),datosProfesional.get("nombre"),datosProfesional.get("telefono"),datosProfesional.get("email"),tratamientosDis, datosProfesional.get("profesional"),diasDis,horariosDis)
    profesionales.push(profesional)
    // ingresar informacion en el local storage
    console.log(profesionales)
    clear(formProfesional)
    //document.getElementById('container').reset();
    //localStorage.setItem("profesionales",JSON.stringify(profesionales))
  })

 

  




