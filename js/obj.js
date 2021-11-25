class Cliente {
    constructor(dni,nombre,apellido,telefono,email){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
    
}
class Profesional {
    constructor (dni,nombre,telefono,email,tratamientos,profesion,dias,horarios){
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.tratamientos = tratamientos;
        this.profesion = profesion;
        this.dias = dias;
        this.horarios = horarios;
    }
    
}
class Turno{
    constructor(nombreCliente, horario, tratamiento, nombreprofesional,dia){
        this.dniCliente = nombreCliente;
        this.horario = horario;
        this.tratamiento = tratamiento;
        this.dniprofesional = nombreprofesional;
        this.dia = dia;
    }
}