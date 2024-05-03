{
   // Type Assertion 
   let anything : any

   anything = "next level developer"

   anything = 2222;

   // (anything as number)


   const kgToGm = (value:string | number): string | number | undefined => {
      if(typeof value === "string"){
         const convertedValues = parseFloat(value)*1000;
         return convertedValues;
      }
      if(typeof value === "number"){
         return value * 1000 ;
      }
   }
   const result1 = kgToGm(1000) as Number
   const result2 = kgToGm("1000") as string

   type CustomError = {
      message:string;
   }


   try{

   }catch(error){
      console.log((error as CustomError).message)
   }


   // / Type Narrowing



}
