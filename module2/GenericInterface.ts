{
   // Generic With Interface
   type Developer<T, X = null>= {
      name:string;
      computer:{
         brand:string;
         model:string;
         releaseYears:string;
      }
      smartwatch: T,
      bike?:X,
   }




type poorDevelopers = {
   brand:string,
   model:string,
   Display:boolean
}

   const poorDeveloper:Developer<poorDevelopers>= {
      name : 'manik',
      computer:{
         brand:'hp',
         model:'x-25',
         releaseYears:'01.o3.2024'
      },
      smartwatch:{
         brand:'hp',
         model:'M-22',
         Display:true
      }
   }




   interface richDeveloper {
      brand:string;
      model:string;
      heartTrack:boolean;
      sleepTrack:boolean;
   }

   interface Bike {
      name:string;
      price:number
   }

   const richDeveloper:Developer<richDeveloper, Bike> = {
      name : 'manik',
      computer:{
         brand:'hp',
         model:'y-35',
         releaseYears:'01.o3.2025'
      },
      smartwatch:{
         brand:'hp',
         model:'M-32',
         heartTrack:true,
         sleepTrack:true,
      },
      bike:{
         name:'r15',
         price:10000,
      }
   }

   



}


