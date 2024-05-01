{
   // Type Alias In Typescript
   type TypeStudent = {
      name:string;
      age:number;
      gender:string;
      contactNumber:string;
      address:string;
   }

   const student1: TypeStudent = {
      name: "John Doe",
      age: 20,
      gender: "Male",
      contactNumber: "123-456-7890",
      address: "123 Main St, City, Country"
  };

  
  const student2: TypeStudent = {
   name: "John Doe",
   age: 20,
   gender: "Male",
   contactNumber: "123-456-7890",
   address: "123 Main St, City, Country"
};



// Define the Add type
type Add = (num1: number, num2: number) => number;

// Define a function using the Add type
const addNumbers: Add = (num1, num2) => {
    return num1 + num2;
};

}