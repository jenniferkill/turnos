let clientes = []


$(() =>{
  //ingresar informacion al array 
  $('#cliente').submit((e) =>{
    e.preventDefault()
    let datosCliente = new FormData(e.target)
    let cliente = new Cliente(datosCliente.get("dni"),datosCliente.get("nombre"),datosCliente.get("apellido"),datosCliente.get("telefono"),datosCliente.get("email"))
    clientes.push(cliente)
    // guardar informacion en el local storage
    localStorage.setItem("clientes",JSON.stringify(clientes))
    $('#cliente').trigger('reset')
  })
})








