{
   // Class And Object
   class Animal {
      // public name:string;
      // public species:string;
      // public sound:string;

      //parameter properties
      constructor(public name:string, public species:string, public sound:string){
         // this.name = name;
         // this.species = species;
         // this.sound = sound;
      }
      makeSound(){
         console.log(`the ${this.name} says ${this.sound}`)
      }
   }


   const dog = new Animal('Bangladesh dog','dog' , 'gew gew gew');
   const cat = new Animal('india cat','CAT' , 'MEW MEW MEW ');
   cat.makeSound()
}