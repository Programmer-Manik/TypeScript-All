{
   // Conditional Types
   type a1 = string;
   type b1 = number;
   type x = a1 extends number ? true : false // Conditional Types
   type y = a1 extends number ? true : b1 extends string ? true : any



   type sheikh = {
      bike:string;
      car:string;
      ship:string;
   }
   // type checkVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
   type checkVehicle<T> = T extends keyof sheikh ? true : false;
   type HasBike = checkVehicle<"bike">


}