db.test.aggregate([
    {$match: {gender:"Male", age: {$lt:30}}},
    {$project: {name:1, phone:1, email:1}}
   
    ])