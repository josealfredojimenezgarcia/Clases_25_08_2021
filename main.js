class Personaje{
  Nombre;//Public Publico
  #poder;//Private Privado
  _saludar;//Protected Protejido
  static personaje = null;
  constructor(){

  }
  static getInstance(){
      if(!(Personaje.personaje instanceof Object)){
          Personaje.personaje = new Personaje();
      }
      return Personaje.personaje;

  }
  #saludarConLaMano(p1="Saludando ahora"){
      return p1;
  }
  get getsaludarConLaMano(){
      return this.#saludarConLaMano();
  }
  set setsaludarConLaMano(SALUDO){
      return this.#saludarConLaMano(SALUDO);
  }
  get getpoder(){
      return this.#poder;
  }
  set setpoder(PODER){
      this.#poder = PODER;
  }
}
class Hechicero extends Personaje{
  static hechicero = null;
  constructor(){
      super(500);
  }
  static getInstance(){
      if(!(Hechicero.personaje instanceof Object)){
          Personaje.personaje = new Personaje();
      }
      return Personaje.personaje;

  }
  obtener(){
      return this.getpoder;
  }
}
Personaje.getInstance().setpoder = 500;
console.log(Personaje.getInstance());


// class calculadora{
//     constructor(NUM1,NUM2){
//         this.num1 = NUM1;
//         this.num2 = NUM2;
//     }
//     suma(){
//         return `Suma de la clase calculadora ${this.num1 + this.num2}`;
//     }
// }
// class avion extends calculadora{
//     constructor(NUM1, NUM2,ALAS, MODELO){
//         super(NUM1, NUM2);
//         this.alas = ALAS;
//         this.modelo = MODELO;
//     }
//     suma(){
//         return `El calculo para construir el avio es de : ${this.num1 + this.num2 + 10}`;

//     }
//     contruirAvion(){
//         return this.suma();
//     }
// }





// let llave2 = new avion(5,8,2,"Avioneta");

// console.log(llave2);

// let llave = new calculadora(2,3);
// console.log(llave.suma());


