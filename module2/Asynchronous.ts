{
  // Asynchronous Typescript
  //promise
  type Todo = {
   id:number;
   userId:number;
   title:string;
   completed:boolean;
  }
  const getTodo = async():Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data:Todo = await response.json();
   //  console.log(data);
   return data
  };
  getTodo();





  //simulate
  type SomeThing = { someThing: string };

  const CratePromise = (): Promise<SomeThing> => {
    return new Promise<SomeThing>((resolve, reject) => {
      const data: SomeThing = { someThing: "someThing" };
      if (data) {
        resolve(data);
      } else {
        reject("something wrong");
      }
    });
  };

  const showData = async (): Promise<SomeThing> => {
    const data: SomeThing = await CratePromise();
    return data;
  };
  showData();
}
