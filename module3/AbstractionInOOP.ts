{
   // Abstraction In OOP
   interface vehicle1 {
      startEngine() : void ;
      stopEngine() : void ;
      move() : void ;
   }
   class Car1 implements vehicle1 {
       startEngine(): void {
          console.log("I am start the car Engine")
       }
       stopEngine(): void {
          console.log("I am stop the car Engine")
       }
       move(): void {
          console.log("I am car engine move")
       }
       test() {
         console.log("I am testing ")
       }
   }

   const toyota = new Car1() ;
   toyota.startEngine()
   // toyota.stopEngine()
   // toyota.move()







   // abstract class 
  abstract  class Car2 {
   abstract startEngine(): void;
   abstract stopEngine(): void ;
   abstract  move(): void;
      test() {
        console.log("I am testing ")
      }
  }
  class toyotaCar extends Car2 {
   startEngine(): void {
      console.log("I am start the car Engine")
   }
   stopEngine(): void {
      console.log("I am stop the car Engine")
   }
   move(): void {
      console.log("I am car engine move")
   }
  }
  const hondaCar = new toyotaCar();
  hondaCar.startEngine()
//   hondaCar.stopEngine()
//   hondaCar.move()



}