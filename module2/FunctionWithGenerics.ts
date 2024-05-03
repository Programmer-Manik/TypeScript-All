{
   // Function With Generics
   const CreateArray = (param:string):string[] => {
      return [param]
   }
   const res1 = CreateArray("bangladesh")


   const CreateArrayWithGenerics = <T>(param:T):T[] => {
      return [param]
   }
   const resGenerics = CreateArrayWithGenerics<boolean>(true)


   const CreateArrayWithGenericsO = <T>(param:T):T[] => {
      return [param]
   }
   interface user {id:number, name:string}
   const resGenericsOjt = CreateArrayWithGenericsO<user>({id:123456, name:'manik'})








   // tuple 
   const CreateTupleWithGenerics = <T, Q>(param:T, param1:Q) : [T, Q] => {
      return [param, param1]
   }
   const res2Generics = CreateTupleWithGenerics<boolean, number>(true, 1111)


   const CreateTupleWithGenericsO = <T, Q>(param:T, param1:Q) : [T, Q] => {
      return [param, param1]
   }
   interface user {id:number, name:string}
   interface user1 {id:number}
   const res2GenericsOjt = CreateTupleWithGenericsO<user, user1>({id:123456, name:'manik'}, {id:1})






   

   const addStudentCourse = <T>(student:T) => {
      const course = 'level 2' 
      return{
         ...student,
         course
      }

   }
   const student1 = addStudentCourse({name:'manik', id:11, gmail:'manik@gmail.com'})
   const student2 = addStudentCourse({name:'manik', id:11, gmail:'manik@gmail.com', job:'not'})
}