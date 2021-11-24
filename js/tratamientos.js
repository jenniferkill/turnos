let limpieza = document.getElementById("limpieza");
let hidratacion = document.getElementById("hidratacion")
let profesionalesDisponibles = document.getElementById("profesionalesDisponibles");
let profesionalesDisponibles2 = document.getElementById("profesionalesDisponibles2");
const profesional1 = new Profesional(123345, "Martin",239043, "ejr@gmail.com", ["limpieza", "acne", "antiage"],["lunes", "martes"],[10, 11, 12],"cosmetologo y esteticista");
const profesional2 = new Profesional(809453,"Marcela", 358903, "m@gmail.com", ["hidratacion", "acne", "despigmentacion"],["miercoles", "jueves",],[13,14,15],"cosmetologa con aparatologia");

let profesionales = [profesional1,profesional2]

//localStorage.setItem(profesionales)



limpieza.addEventListener("click", () => {
  
    profesionales.forEach (profesional => {
      if(profesional.tratamientos.includes("limpieza")){
        profesionalesDisponibles.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${profesional.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${profesional.profesion}</h6>
                <button type="click" class="btn btn-primary" id="horario">Siguiente</button>
            </div>
        </div>
        `
      }
    })

    
})

hidratacion.addEventListener("click", () => {
  
  profesionales.forEach (profesional => {
    if(profesional.tratamientos.includes("hidratacion")){
      profesionalesDisponibles2.innerHTML += `
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${profesional.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${profesional.profesion}</h6>
              <button type="click" class="btn btn-primary" id="horario">Siguiente</button>
          </div>
      </div>
      `
    }
  })
  
})
