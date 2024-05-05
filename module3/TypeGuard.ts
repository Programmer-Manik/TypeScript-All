{
   // Type Guard Using Typeof & In


   // typeof
   type StringNumber = string | number;
   const add = (pram1:StringNumber, pram2:StringNumber):StringNumber => {
      if(typeof pram1 === "number" && typeof pram2 === "number"){
         return pram1 + pram2 
      }else{
         return pram1.toString() + pram2.toString()
      }
   }
   const data = add('111' ,'111')
   console.log(data)


   //in 

   type NormalUser = {
      name:string;
   }

   type AdminUser = {
      name:string;
      role:'admin'
   }
   const getUser = (user:NormalUser | AdminUser) => {
      if("role" in user){
         console.log(`my name is ${user.name} and my role is ${user.role}`)
      }else{
         console.log(`my name is ${user.name}`)
      }
   }
   const normalUser :NormalUser = {
      name:'manik'
   }
   const adminUser:AdminUser = {
      name:'mah',
      role:"admin"
   }
   getUser(normalUser)
   // getUser(adminUser)
}