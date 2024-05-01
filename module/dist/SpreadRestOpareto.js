"use strict";
{
    // Spread And Rest Operator
    const bros1 = ["manik", 'sakib', "nahid"];
    const bros2 = ["mahin", 'sojib', "rabi"];
    bros1.push(...bros2);
    const mentor1 = {
        javascript: 'saki',
        redux: 'nai',
        prisma: 'kkk'
    };
    const mentor2 = {
        javascript: 'sDki',
        redux: 'Mai',
        prisma: 'kdk'
    };
    const MentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    const friends = (...friendsAll) => {
        friendsAll.forEach((data) => console.log(`hi ${data}`));
    };
    friends("lorem", 'nai', 'data');
}
