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


   db.test.aggregate([
    // {$group: { _id: "$address.country", count:{$sum:1}}},
    // {$group: { _id: "$address.country", amakDekhawName:{$push: "$name"}, count:{$sum:1} }},
    {$group: { _id: "$address.country", fullDoc:{$push: "$$ROOT"}, count:{$sum:1} }},
    {$project: {
        "fullDoc.name":1,
        "fullDoc.address":1,
        "fullDoc.phone":1,
    }},
    ])