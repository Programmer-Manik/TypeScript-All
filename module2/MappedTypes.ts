{
   // Mapped Types 
   const arrOfNumber:Number[] = [1, 2, 3, 4,]
   const arrOString: string[] = arrOfNumber.map((number)=>
      number.toString()
   )
   console.log(arrOString)




   type AreaNumber = {
      height:number;
      width:number;
   }
   type height = AreaNumber['height']// look up type
   // type AreaString = {
   //    height:String;
   //    width:String;
   // }
   type AreaString = {
     [key in keyof AreaNumber]: string
   }


   


   type AreasString<T> = {
      [key in keyof T]: T[key]
    }
    const area1 : AreasString<{height:string; width:number}> = {
      height:'100',
      width:100
    }

}