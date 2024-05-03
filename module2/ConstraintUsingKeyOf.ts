{
   // Constraint Using Key Of

   type vehicle  = {
      bike:string;
      car:string;
      ship:string;
   }

   type Owner = "bike" | "car" | "ship" ; //manually
   type Owner2 = keyof vehicle ;



   const getPropertyValue = <X,Y extends keyof X> (obj:X, key:Y) => {
      return obj[key];
   }
   const user = {
      name:'mr manik',
      age:22,
      address:'tgn'
   }
   const result1 = getPropertyValue(user,'name');



   // user['name'] = 'mr manik'
}