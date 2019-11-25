
function submitCheck(){
    let userName=document.getElementById("userName");
    let pass=document.getElementById("pass");
    console.log(pass);
    if(!userName.value)
    {
        userName.style.border="solid 1px red";
    }
    if(!pass.value)
    {
        console.log("sdas");
        pass.style.border="solid 1px red";
    }

}