{
   type user1 = {
      name:string;
      age:number;
   }
   type userWithRoll1 = user1 & {role : string}

   const users:userWithRoll1 = {
      name:"manik",
      age:333,
      role:'manger'
   }


   interface user2 {
      name:string;
      age:number;
   }
   interface userWithRoll2 extends user2  {role : string} 
   const user:userWithRoll1 = {
      name:"manik",
      age:333,
      role:'manger'
   }




   type RollNumber = number ;

   type roll1 = number[];
   const roll:roll1 = [0,1,2]

   interface role2 {
      [index:number]:number;
   }
   const Roll:role2 = [0,1,2]


type add = (num1:number, num2:number) => number
const add:add = (num1, num2) => num1 + num2


interface Add {(num1:number, num2:number):number} 
const adds:Add = (num1, num2) => num1 + num2




  
}