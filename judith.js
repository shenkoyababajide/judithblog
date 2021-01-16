function myFunction(){
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
        if(name.value.trim() == ""){
            document.getElementById("name").style.border = "2px solid red";
            document.getElementById("error-name").style.visibility = "visible";
            return false;
        }else if(phone.value.trim() == ""){
            document.getElementById("phone").style.border = "2px solid red";
            document.getElementById("error-phone").style.visibility = "visible";
            return false;
        }else if(email.value.trim() == ""){
            document.getElementById("email").style.border = "2px solid red";
            document.getElementById("error-email").style.visibility = "visible";
            return false;
        }else{
            return true;
        }
}


function myFunction2(){
    let b = document.getElementById("submit").value;
        alert("Thank you for your feedback. We will respond to your feedback shortly.");
}