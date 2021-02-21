const email=document.getElementById('email');
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const genderMele=document.getElementById('genderMele');
const genderFemale=document.getElementById('genderFemale');
const genderOther=document.getElementById('genderOther');
const dateOfBirth=document.getElementById('dateOfBirth');
const password=document.getElementById('password');
const confrimPassword=document.getElementById('confrimPassword');
const registerBtn=document.getElementById('registerBtn');

//Select all Error message
const errorEMail=document.getElementById('errorEMail');
const firstNameError=document.getElementById('firstNameError');
const lastNameError=document.getElementById('lastNameError');
const dateError=document.getElementById('dateError'); 
const passwordError=document.getElementById('passwordError'); 
const confrimPasswordError=document.getElementById('confrimPasswordError'); 

/* Declared empty variable get 
email and password*/
let emailContainer='';
let passContainer='';



// Regester Button Activities
registerBtn.addEventListener('click',()=>{
    CheckUserData();
})

function CheckUserData(){
    
    const nameType= document.getElementsByName("type");
    
    if(email.value.indexOf('@')<=0){
        errorEMail.innerHTML="Please include a valid email";
        email.focus();
        return false;
    }
    if((email.value.charAt(email.value.length-4)!='.')&&(email.value.charAt(email.value.length-3)!='.')){
        errorEMail.innerHTML="Wrong email format";
        email.focus();
        return false;
    }
    if(firstName.value==""){
        firstNameError.innerHTML="Insert First Name";
        firstName.focus();
        return false;
    }
    if(firstName.value.length<3){
        firstNameError.innerHTML="At least 3 charecter.";
        firstName.focus();
        return false;
    }
    if(lastName.value==""){
        lastNameError.innerHTML="Insert Last Name";
        lastName.focus();
        return false;
    }
    if(lastName.value.length<3){
        lastNameError.innerHTML="At least 3 charecter.";
        lastName.focus();
        return false;
    }
    if(nameType[0].checked){
        const typeValue= nameType[0].value;
        alert(typeValue);
    }
    else if(nameType[1].checked){
        const typeValue= nameType[1].value;
        alert(typeValue);
    }
    else if(nameType[2].checked){
        const typeValue= nameType[2].value;
        alert(typeValue);
    }

    if(dateOfBirth.value==""){
        dateError.innerHTML="Select date of birth.";
        dateOfBirth.focus();
        return false;
    }
    if(password.value==""){
        passwordError.innerHTML="Type your Password";
        dateOfBirth.focus();
        return false;
    }
    if(password.value.length<6){
        passwordError.innerHTML="Password must be 6 digit";
        password.focus();
        return false;
    }

    if(confrimPassword.value!==password.value){
        confrimPasswordError.innerHTML="Password do not match";
        password.focus();
        return false;
    }
    else{
        emailContainer=email.value;
        passContainer=password.value;
        console.log(emailContainer);
    }

}