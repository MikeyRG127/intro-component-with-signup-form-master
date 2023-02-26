var showingError = document.querySelector(":root");
var borderChange = document.getElementById("input");
var fieldsfilled = 0;
function submit(){
    var gettingFirstname = document.getElementsByClassName("firstname");
    if(gettingFirstname[0].value == ""){
        showingError.style.setProperty('--errorFirstname', 'block');
        showingError.style.setProperty('--error', 'block');
        showingError.style.setProperty('--borderColorFirstname', 'red');
    }else{
        showingError.style.setProperty('--errorFirstname', 'none');
        showingError.style.setProperty('--borderColorFirstname', 'rgba(0, 0, 0, 0.247)');
        fieldsfilled = fieldsfilled + 1;
    }

    var gettingLastname = document.getElementsByClassName("lastname");
    if(gettingLastname[0].value == ""){
        showingError.style.setProperty('--errorLastname', 'block');
        showingError.style.setProperty('--borderColorLastname', 'red');
    }else{
        showingError.style.setProperty('--errorLastname', 'none');
        showingError.style.setProperty('--borderColorLastname', 'rgba(0, 0, 0, 0.247)');
        fieldsfilled = fieldsfilled + 1;
    }

    var gettingEmail = document.getElementsByClassName("email");
    if(gettingEmail[0].value == ""){
        showingError.style.setProperty('--errorEmail', 'block');
        showingError.style.setProperty('--borderColorEmail', 'red');
        gettingEmail[0].placeholder = 'email@example.com';
        showingError.style.setProperty('--emailPlaceholder', 'red');
    }else{
        showingError.style.setProperty('--errorEmail', 'none');
        showingError.style.setProperty('--borderColorEmail', 'rgba(0, 0, 0, 0.247)');
        fieldsfilled = fieldsfilled + 1;
        
    }

    var gettingPassword = document.getElementsByClassName("password");
    if(gettingPassword[0].value == ""){
        showingError.style.setProperty('--errorPassword', 'block');
        showingError.style.setProperty('--borderColorPassword', 'red');
    }else{
        showingError.style.setProperty('--errorPassword', 'none');
        showingError.style.setProperty('--borderColorPassword', 'rgba(0, 0, 0, 0.247)');
        fieldsfilled = fieldsfilled + 1;
    }
    

    if(fieldsfilled == 4){
        gettingFirstname[0].value = '';
        gettingLastname[0].value = '';
        gettingEmail[0].value = '';
        gettingPassword[0].value = '';
        gettingEmail[0].placeholder = 'Email Address';
        showingError.style.setProperty('--emailPlaceholder', 'rgba(0, 0, 0, 0.356)');
        alert("SUBMITED");
        
    }

    fieldsfilled = 0;
}