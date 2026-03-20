

class Alumno {
    
  constructor(username, dni, edad) {
    this.username = username;
    this.dni = dni
    this.edad = edad;
  }
  toString(){
    console.log(" Nombre: " + this.username + " DNI: "+ this.dni + " Edad: "+ this.edad);
  }
}
export default Alumno;

