db.test.aggregate([
    {$match: {gender:"Male", age: {$lt:30}}},
    {$project: {name:1, phone:1, email:1}}
   
   ]) 


db.test.aggregate([
    // {$match: {gender:"Male",}},
    {$addFields: {course:'l2', minitor:'hp', leptop:'dell'}},
    // {$project: {name:1,  course:1 , minitor:1, leptop:1}},
    //{$out: "myData"},
    {$merge:"text"}
   
   ])