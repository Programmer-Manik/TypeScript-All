{
  // Spread And Rest Operator

  const bros1: string[] = ["manik",'sakib',"nahid"];
  const bros2: string[] = ["mahin",'sojib',"rabi"];
  bros1.push(...bros2)


const mentor1 = {
   javascript:'saki',
   redux:'nai',
   prisma:'kkk'
}
const mentor2 = {
   javascript:'sDki',
   redux:'Mai',
   prisma:'kdk'
}

const MentorList = {
   ...mentor1,
   ...mentor2
}

const friends = (...friendsAll:string[]) => {
   friendsAll.forEach((data:string)=> console.log(`hi ${data}`))
}
friends("lorem",'nai', 'data')
}
