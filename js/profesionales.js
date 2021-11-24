let profesionales = [];
let tratamientos = []
let dias = []
let horarios =[]

$(() => {
 /* // ingresar informacion al array
  $('#formprofesional').submit((e)=>{
    e.preventDefault()
    let datosProfesional = new FormData(e.target)
    let profesional = new Profesional (datosProfesional.get("dni"),datosProfesional.get("nombre"),datosProfesional.get("telefono"),datosProfesional.get("email"))
    profesionales.push(profesional)
    // ingresar informacion en el local storage
    localStorage.setItem("profesionales",JSON.stringify(profesionales))
  })*/
  $('#agregar').on("click",()=>{
      let seleccionados = $('#checkboxTratamientos input:checked')
      console.log (seleccionados)
    });
  
    
    

 })

  




