// Smartest IDE for MongoDB

// https://nosqlbooster.com/downloads Download and install then

// 1 new connection ,2 test Connection, 3 close then ok, 4 save & connect

//5-2 insert,insertOne, find, findOne, field filtering, project

`db.test.find({gender:'Male'},{gender:1})`

`db.test.find({gender:'male'}).project({name:1})`

//**5-2 insert,insertOne, find, findOne, field filtering, project**

//**5-3 $eq, $ne, $gt, $lt, $gte, $lte**

`1db.test.find({age:{$eq:30}})`

`2db.test.find({age:{$ne:30,}})`

`3db.test.find({age:{$gt:30}})`

`4db.test.find({age:{$lt:30}})`

`5db.test.find({age:{$gte: 30}})`

`6db.test.find({age:{$lte: 30}})`

`db.test.find({age:{$gte: 10}}).sort({ age:1 })`

`db.test.find({age:{$gte: 10}}).sort({ age:-1 })`

//**5-3 $eq, $ne, $gt, $lt, $gte, $lte**

//**5-4 $in, $nin, implicit and conditionPreviousNext**

//**implicit and condition**

`db.test.find({gender:"Male",age:{$gte:10,$lte:20}},{age:1,gender:'Male'}).sort({ age:1 })`

//in

`db.test.find({
gender:"Male",
age:{$nin:[22,24,26,28,30,32,34]},
interests:{$in:["Writing","Cooking"]}`

`},
{age:1,gender:'Male',interests:"Cooking"}).
sort({ age:1 })`

//nin

`db.test.find({
gender:"Male",
age:{$nin:[22,24,26,28,30,32,34]},
interests:{$in:["Writing","Cooking"]}`

`},
{age:1,gender:'Male',interests:"Cooking"}).
sort({ age:1 })`

// **5-4 $in, $nin, implicit and conditionPreviousNext**

//**5-5 $and, $or, implicit vs explicit**

//and

`db.test.find({
$and:[
{gender:"Male"},
{age:{$lt:30}}`

`]`

`}).project({
gender:1,
age:1`

`}).sort({ age:1 })`

//or

`db.test.find({
$or:[
{interests:'Cooking'},
{interests:"reading"}`

`]`

`}).project({
interests:1,
age:1`

`}).sort({ age:1 })`

// ex**mplicit**

//**5-5 $and, $or, implicit vs explicit**

//**5-6 $exists, $type,$size**

`db.test.find({age:{$exists:true}}).sort({ age:1 })`

`db.test.find({age:{$type: "string"}})`

`db.test.find({friends:{$size: 5}}).project({friends:1})`

//**5-6 $exists, $type,$size**

//**$all , $elemMatch**

// 1all

`db.test.find({interests:{$all:[ "Gaming", "Writing", "Reading" ]}}).project({interests:1})`

// 2**elemMatch**

`db.test.find({
skills:{$elemMatch: {
"name" : "JAVASCRIPT",
"level" : "Expert",
"isLearning" : false
}}
}).project({skills:1})`

//**$all , $elemMatch**

//**5-8 $set, $addToSet, $push,**

//frist fie code:

`db.test.find({	_id : ObjectId("6406ad63fc13ae5a40000065")})`

//file tow and $set

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$set:
{age:70},`

`},`

`)`

// akhane kichhu somossa achhe update array and object ke reples kore dei add hoi nah tar jon array update operators lagbe ;

//array update

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$addToSet: {
interests :  "Gaming"
}
},
)`

//each akadhik add

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$addToSet: {
interests : {$each: ["manik","islam","sakib"]}
}
},
)`

//**5-8 $set, $addToSet, $push,**

//**5-9 $unset, $pop, $pull, $pullAll**

//file one

`db.test.find({	_id : ObjectId("6406ad63fc13ae5a40000065")})`

//file tow

//unsent

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$unset: {birthday: "" }
}`

`)`

//pop

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$pop: {friends:1}
}`

`)`

//pull

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$pull:{friends:"Tanmoy Parvez"}
}`

`)`

//**pullAll**

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{$pullall:{friends:["Tanmoy Parvez","",""]}
}`

`)`

//**5-9 $unset, $pop, $pull, $pullAll**

//**5-10 More about $set, how to explore documentation**

// onefile

`db.test.find({	_id : ObjectId("6406ad63fc13ae5a40000065")})`

// tow file

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065"),"education.major":"Art"},
{
$set: {
'education.$.major':"cse"
}
}`

`)`

//age a years kore batare chai

`db.test.updateOne(
{_id : ObjectId("6406ad63fc13ae5a40000065")},
{
$inc : {
age : 1
}
}`

`)`

// **5-10 More about $set, how to explore documentation**

/**5-11 delete documents, drop collection and how to explore by yourself**

delete = `db.test.deleteOne({_id : ObjectId("6406ad63fc13ae5a40000065")})`

drop `db.test.drop({writeConcern:{w:1}})`

//5-11 delete documents, drop collection and how to explore by yourself
