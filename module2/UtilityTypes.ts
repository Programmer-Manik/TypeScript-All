{
   // Utility Types

   type Person = {
      name:string;
      age:number;
      email?:string;
      contactNo:string;
   }
   //pick 
   type NameAge = Pick<Person, "name" | "age">
   //omit
   type contactInfo = Omit<Person, "name" | "age">
   //Required 
   type PersonRequired = Required<Person>
   //partial
   type PersonPartial = Partial<Person>
   //readOnly
   type PersonReadOnly = Readonly<Person>
   const Person1:PersonReadOnly = {
      name:'manik',
      age:22,
      email:'manik@gmail.com',
      contactNo:'232342343'
   }
   // Person1.age = 5555 error 

   //record 
   type obj = Record<string,string>
   const MYObject:obj = {
      a:'a',
      b:'b',
      c:'c'
   }

   //


}