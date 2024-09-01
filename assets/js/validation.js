var nameError = document.getElementById('name-error');
var emailError = document.getElementById("email-error");
var companyname = document.getElementById("companyname-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name =document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name Required";
        nameError.style.color = "red";
        return false;
    }
    if (!name.match(/^[A-Za-z]/)) {
        nameError.innerHTML = "Write full name";
        nameError.style.color = "red";
        
        return false;
    }
    nameError.innerHTML = "Valid";
    nameError.style.color = "green";
    return true;
}
function validateEmail() {
    var email =document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email Required";
        emailError.style.color = "red";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Write email name";
        emailError.style.color = "red";
        
        return false;
    }
    emailError.innerHTML = "Valid";
    emailError.style.color = "green";
    return true;
}

function validateMessage() {
    var message =document.getElementById("message").value;
    var required =20 ;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        messageError.style.color="red";
        return false;
    }
    messageError.innerHTML = "valid";
    messageError.style.color="green";
    return true;
}
