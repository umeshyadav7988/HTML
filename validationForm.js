const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//----------------------------------------------------------------------------------------------------------------------------------

form.addEventListener('submit',e=>{
    e.preventDefault();
    //-----------Check all validations---------------------------------------------------------------------------------------------- 
    validateInput();
})

const validateInput=()=>{
    const usernameValue=username.value.trim();  // Trim removes extra spaces from the input
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue===""){
        setError(username,'username is empty');
    }
    else{
        setSuccess(username);
    }
}

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errDisplay=inputControl.querySelector('.error');
    errDisplay.innerText=message;
}

const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errDisplay=inputControl.querySelector('.error');
    errDisplay.innerText="";
}