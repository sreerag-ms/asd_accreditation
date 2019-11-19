
function submitCheck(){
    let userName=document.getElementById("userName");
    let pass=document.getElementById("pass");
    let from=document.getElementsByClassName("login-form")
    console.log(pass);
    if(!userName.value)
    {
        alert("asdasd");
        userName.style.border="solid 1px red";
        

    }
    else
        from[0].submit();
    if(!pass.value)
    {
        console.log("sdas");
        pass.style.border="solid 1px red";
    }


}