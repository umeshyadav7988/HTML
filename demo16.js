// var qs = document.querySelectorAll("button");
// console.log(qs);

// qs[0].innerText="Submit";
// qs[0].setAttribute("id","btn1");

// function changecolor(){
//   qs[0].style.backgroundColor="red";
// }


// var posts=[
          //  {name:"pranav",age:"3"},
          //  
          //  {name:"gagan",age:"50"}
// ];
// 
// posts.forEach(()=>{
// 
  // alert(x.name);
// 
// });



// let message = "hello";
// message=12345;

// output-No error 

// console.log(1/0);

// output-infinity

// console.log("not a number"/2);

//output-Nan


//chess board
</head>
<style>
    body{
        font-size:50px;
    }
</style>
<body>
    <script>
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if((i+j)%2==0){
                document.write('<b>*</b> ');
            }
            else{
                document.write('<b>#</b> ');
            }
        }
        document.write("<br>");
    }    
    </script>
</body>
</html>

//Array iterrative map
function shallowCopy(input) {
  const myarr=input.map(myfunction);
 function myfunction(value,index,arr){
   return value;
 }
 return myarr;
}

//DOM Tree: Changing HTML Elements 
function setInnerHTML(element,innerHTML){
	element.innerHTML=innerHTML;
}

function setElementAttribute(element,attribute,value){
  element.attribute=value;
}

function setElementStyle(element,styleName,value){
  element.style[styleName]=value;
}

//DOM Events: HTML Event Attributes
<div id="my-div" onclick="changeBackgroundToRed()"></div>

function changeBackgroundToRed(){
  a.style.backgroundColor="red";
}
var a=document.querySelector("div");


//DOM Events: Adding Event Listener
<p>this is para 1.</p>

function changeParaText(event) {
	event.target.innerText = 'Yay! you added the event listener.'
}

// Start your code here ---->
var a=document.querySelector("p");
a.addEventListener("click",changeParaText);




//DOM Events: Removing Event Listener
function removeOnMouseLeave(){
  var b=document.getElementById("my-div");
  b.removeEventListener("mouseleave",changeWhite);
}

removeOnMouseLeave();






