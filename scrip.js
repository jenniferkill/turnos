let clientes = []
let formCliente = document.getElementById("cliente")




function clear() {
    document.getElementById("cliente").reset();
  }

formCliente.addEventListener("submit",(e) => {
    e.preventDefault()
    let datosCliente = new FormData(e.target)
    let cliente = new Cliente(datosCliente.get("dni"),datosCliente.get("nombre"),datosCliente.get("apellido"),datosCliente.get("telefono"),datosCliente.get("email"))
    clientes.push(cliente)
    localStorage.setItem("clientes",JSON.stringify(clientes))
    clear(formCliente)
    window.location.href = 'tratamiento.html'
    })








