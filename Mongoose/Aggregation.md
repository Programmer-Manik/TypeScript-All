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





db.test.aggregate([
    {$group: { 
        _id: null, 
        totalSalary:{$sum: "$salary"},
        maxSalary:{$max: "$salary"},
        minSalary:{$min : "$salary"},
        avgSalary:{$avg : "$salary"}
        }
    },
    {
        $project: {
        totalSalary:1,
        maxSalary:1,
        minSalary:1,
        avaregSalary:"$avgSalary",
        rangeMaxAndMin: {$subtract: ["$maxSalary", "$minSalary"]}
        },
    }
    ])





   db.test.aggregate([
    {$unwind: "$interests"},
    {
    $group: { _id: "$age" , interestsPerAge:{$push: "$interests"}}
    }
   
   ])







db.test.aggregate([
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80,],
            default: "Other",
            output: {
                count: { $sum: 1 },
                fullDoc: { $push: "$$ROOT" }
            }
        }
    },
    {
        $sort: {
            count: -1,
        }
    },
    {$limit: 2},
    {
        $project: {
                count:1
        }
    },


])








db.test.aggregate([
    {
        $facet: {
            // pipelineOne
            "friendsCount": [
               { $unwind: "$friends" },

               { $group: { _id: "$friends", count: { $sum: 1 } } },
            ],
            // pipelineTow
            "educationCount": [
                { $unwind: "$education" },
                {
                    $group: { _id: "$education", count: { $sum: 1 } }
                }
            ],
            // pipelineTow
            "skillsCount": [
                { $unwind: "$skills" },
                {
                    $group: { _id: "$skills", count: { $sum: 1 } }
                }
            ]
         }
   },


])








db.orders.aggregate([
    {
        $lookup: {
            from: "text",
            localField: "userId",
            foreignField: "_id",
            as: "Manik"
        }
    }
])