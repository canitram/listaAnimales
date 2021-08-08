
//Clase Propietario
class Propietario {  
   constructor(n, d, t) {    
      this.name = n;
      this.direction = d;
      this.phone = t;
   }
   datosPropietario(){
      return (`El nombre del dueño es: ${this.name}, el domicilio es: ${this.direction}, y el número de teléfono de contacto: ${this.phone}`);
   }
}

//Clase Animal
class Animal extends Propietario {
   constructor(n, d, t, tp) {
      super(n, d, t);
      this._type = tp;      
   }

   get type() {
      return this._type;      
   }
}

//Clase Mascota
class Mascota extends Animal {
   constructor(n, d, t, tp, nom, enf) {
      super(n, d, t, tp);
      this._name = nom      
      this._disease = enf;
   }

   get namePet() {
      return this._name;
   }

   set namePet(newName) {
      this._name = newName;
   }
   
   get disease() {
      return this._disease;
   }

   set disease(newDisease) {
      this._disease = newDisease;
   }  
}

//DOM
let formulario = document.querySelector('form');
formulario.addEventListener('submit', agregaMascota);
function agregaMascota(event){
   event.preventDefault();

   let propietario = document.getElementById("propietario").value;
   
   let fono = document.getElementById("telefono").value;
   
   let direccion = document.getElementById("direccion").value;
   
   let nombreMascota = document.getElementById("nombreMascota").value;
   
   let consulta = document.getElementById("enfermedad").value;
   
   let tipo = document.getElementById("tipo").value;
   switch(tipo){
      case "perro" : 
         let perro = new Mascota(propietario, direccion, fono, tipo, nombreMascota, consulta);
         infoPropietario(perro);
         infoMascota(perro);
         break;
      
      case "gato" : 
         let gato = new Mascota(propietario, direccion, fono, tipo, nombreMascota, consulta);
         infoPropietario(gato);
         infoMascota(gato);
         break;

      case "conejo" : 
         let conejo = new Mascota(propietario, direccion, fono, tipo, nombreMascota, consulta);
         infoPropietario(conejo);
         infoMascota(conejo);
         break;
   }
   //limpiar formulario
   /* clearForm(); */
   document.querySelector('form').reset();
}

function infoPropietario(m1){
   //seleccionar elemento
   let ul = document.querySelector('ul');
   
   //creando elemento
   let li = document.createElement('li');
   
   //asignar mensaje de m1 
   li.innerHTML = m1.datosPropietario();
   
   //agregar como hijo de ul la variable li
   ul.appendChild(li);
}

function infoMascota(m1){
   //seleccion elemento
   let ul = document.querySelector('ul');
   
   //creando elemento
   let li2 = document.createElement('li');
   
   //texto que contiene el nuevo li
   li2.innerHTML = `El tipo de animal es un: ${m1.type}, mientras que el nombre de la mascota es: ${m1.namePet}, y la enfermedad es: ${m1.disease}`;

   ul.appendChild(li2);
}


/* function clearForm(){
   document.getElementById("propietario").value = "";
   
   document.getElementById("telefono").value = "";
   
   document.getElementById("direccion").value = "";
   
   document.getElementById("nombreMascota").value = "";
   
   document.getElementById("enfermedad").value = "";
   
   document.getElementById("tipo").selectedIndex = 0;
} */

