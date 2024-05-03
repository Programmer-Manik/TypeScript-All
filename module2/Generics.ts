{
   // Introduction To Generics
   type role = Array<number>
   type mentor = Array<string>
   type boolAge = Array<boolean>

   type GenericsArray<T> = Array<T>
   
   const roleNumber : number[] = [1 , 2 , 3 ,]
   const roleNumber1 : Array<number> = [1 , 2 , 3 ,]
   const roleNumber2 : role = [1 , 2 , 3 ,]
   const roleNumber3 :GenericsArray<number>= [1 , 2 , 3 ,]

   const mentor : string[] = ['manik' , 'islam', 'have']
   const mentor1 : Array<string> = ['manik' , 'islam', 'have']
   const mentor2 : mentor = ['manik' , 'islam', 'have']
   const mentor3 : GenericsArray<string> = ['manik' , 'islam', 'have']

   const boolAge:boolean[] = [true, false, true]
   const boolAge1:Array<boolean>= [true, false, true]
   const boolAge2:boolAge= [true, false, true]
   const boolAge3:GenericsArray<boolean>= [true, false, true]
   // Array of object generics use 
   const user: GenericsArray<{name:string, age:number}> = [
      {
         name:'manik',
         age:20,
      },
      {
         name:'islam',
         age:22,
      },
   ]
   //Tuple Generics
   type GenericsArrays<x,y,z> = [x, y, z]
   const studentData : GenericsArrays<string,number,boolean> = ['manik', 111 , true]
   const userIdData :GenericsArrays<string, {name:string, email:string,}, boolean> = ["23415", {name:'manik', email:'manik@gmail.com'}, true]
}