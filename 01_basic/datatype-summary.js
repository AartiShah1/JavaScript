//In datatype ---how data is  store  in memory and how can you access the data
//in this basis they have done the categorization of datatype- primitive and non-primitive

//                        //Primitive Datatype
//  7 type-
// Number,String,Boolean,symbol,null,Bigint,undefined

const num=123
const names="Aarti";
const ispass=false;
const id=Symbol('123');
const weather=null;
const Bigint=12556555522222222222222222222222222222222222255555552n;
let city;
console.log(Bigint);

//                   //Non-Primitive(Reference)
// Array,object,function             ---their datatype/returntype is represented as function

const name=["jack","john","jerry"];
 
let object={
    name:"Aarti",
    class:9,

}
const myFunction=function(){
console.log("hello");
}


  /*                  Memories
there are two typess of memmories- 

Stack(Primitive datatype mai stack memory use hota hai, when we use stack memory it means whatever u declare in  variables--- uska ek copy milta hai) 
and Heap(Non-Primitive    u get-original value/ reference)
*/