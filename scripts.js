//calback function

//NOTE: in javascript function are treated as a object.

//NOTE:1. if we want particular function func1 get executed automatically after func2.
//2. we can change implementation of function.

// var sum = (a, b) => {
  // return a + b;
// };
// 
// var diff = (a, b) => {
  // return a - b;
// };
// function calc(fx, a, b) {
  // return fx(a, b);
// }
// 
// console.log(calc(sum, 9, 5));
// console.log(calc(diff, 9, 5));

//#Promise
// kesi function main name nhi diya h to us function ko anonymous function bolte h.

// var work= false;
// var work= true;



// var Prom = new Promise(function (resolve, reject) {

    // if(work){

        // resolve("Yes the work is Done");

    // }
    // else{

        // reject("Sorry Error! Occured...");

    // }
// });

// console.log(Prom);




//getElementsByTagName
// let header=document.getElementById('header');
// let show=header.getElementsByTagName('header')[0]; // collection deta h
//document.getElementsByTagName
// console.log(show);




//getElementsByClassName
// let header=document.getElementsByClassName('flower');
// console.log(header);


//querySelectoAll & querySelector



// alert(s);
// alert('2'+ 3 );
// alert('3' + '4');
// alert(2 + 2 + '3');
// alert(5 /'2' );

// let x=3;
// let y=5;


// console.log(`x:${x}, y:${y}`);
// let a = 3;
// const b = ++a;
//  
// console.log(`a:${a}, b:${b}`);
// 

// setinterval(function(){
  // alert('jakhar chutiya');
// },2000);
// console.log(u);



// const sum = (a,b)=>{
  // console.log("umesh",1000, a + b);
// }
// setinterval(sum,2,3);
// 

// const myTimeout=setTimeout(greeting,4000);
// function greeting(){
// 
  // document.getElementById('umesh').innerHTML="Jakhar ke muhh m land";
// };
// function myStopFunction() {
  // clearTimeout(myTimeout);
// }

let numbers = [1, 2, 3, 5, 7, 11];

const maparray=numbers.map(function(x){
  return x*2;
});
console.log(maparray);