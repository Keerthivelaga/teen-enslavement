let username = document.getElementById("username");
let password = document.getElementById("password");

function validationform()
{
    if(username.value == "")
    {
        document.getElementById("userError").innerHTML = "Enter your E-mail";
        return false;
    }
    else{
        document.getElementById("userError").innerHTML ="";
    }
    if(password.value =="")
    {
        document.getElementById("passError").innerHTML = "Enter password";
        return false;
    }
    else if (password.value.length < 8) 
    {
        document.getElementById("passError").innerHTML = "Enter with minimum 8 characters";
        return false;
    }
   
}