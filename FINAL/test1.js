/*let age=20;
age=35;
console.log(age);
const roll=40;
console.log(roll);
const num=new Array(1,2,3,4,5);
console.log(num);
const hello=['hello','1',2,3];
console.log(hello);
hello[4]='bing';
console.log(hello);
hello.push("binod");
console.log(hello);
hello.unshift("Ganesh");
console.log(hello);
console.log(hello[3])
for(let i=0; i<10; i++){
    console.log(i)
}
let i=0;
while (i<10){
    console.log(i)
    i=i+1;
}
for (i in hello){
    console.log(hello[i]);
}
let j=0;
do{
    console.log(j);
    j=j+1;
}
while(j<10);
const x=10;
const y=10;
if (x==y){
    console.log("Ganesh");
}  
if(x==10 && y==9){
    console.log("Prince");
} else if(x==10 || y==9){
    console.log("binod");
}
switch (10){
    case 11:
        console.log("Prince prince");
        break;
    case 12:
        console.log("ganesh ganesh");
        break;
    case 13:
        console.log("binod prince");
        break;
    default:
        console.log("Prince123");
}
const x=10;
const color=x>2 ? 'red' : 'blue';
console.log(color)*/
function add(num1,num2){
    return num1+num2;
}
console.log(add(4,6))
const a1=(n1,n2)=>{
    console.log(n1+n2);
}
a1(1,2)
const person={
    firstname: "mandip",
    lastname: "raut",
    age: 18,
    hobbies:['dance','movie'],
    address:{
        street: 'hattiban',
        city: 'kathmandu'
    }
}
console.log(person.firstname)
console.log(person.hobbies[0])