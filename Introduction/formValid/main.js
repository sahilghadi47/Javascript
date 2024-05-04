const fName = document.getElementById('fName')
const uEmail = document.getElementById('uEmail')
const uContact = document.getElementById('uContact')
const uPass = document.getElementById('uPass')
const cnfPass = document.getElementById('cnfPass')
const msg = document.getElementById('msg')


function validUser(name){
    if(!name){
        showMessage('fname-msg','Enter vaild name')
        return false

    }else{
        clearSpan('fname-msg')
    }
    return true;
}

function vaildEmail(email) {
    //
    const user = String(email)
    const reg =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(user.match(reg)){
        clearSpan('email-msg')
    }else{
        showMessage('email-msg', 'invalid email address')
        return false
    }
    return true
}

function validContact(contact){
    //
    const num = Number(contact);
    if(!num){
        showMessage('tel-msg', 'invalid mobile number')
        return false
    }else if(num.toString().length !=10){
        showMessage('tel-msg', 'Enter 10 mobile  digit number')
        return false
    }
    else{
        clearSpan('tel-msg')
    }

    return true
}

function validPass(pass){
    //
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    if(regex.test(pass)){
        clearSpan('pass-msg');
    }else{
        showMessage('pass-msg', 'Create a strong password')
        return false
    }
    return true
}

function cnfPassword(pass , cnf){
    if(pass != cnf){
        showMessage('cnf-msg','Password mis-match')
        return false
    }else{
        clearSpan('cnf-msg')
    }
    return true
}

let p = document.createElement('p')
function showMessage(id, message){
    //
    span = document.getElementById(id);
    span.style.display = 'block'
    p.innerHTML= message;
    span.appendChild(p);
    
}

function clearSpan(id){
    
    span = document.getElementById(id);
    span.style.display = 'none'
}

document.getElementById('inputForm').addEventListener('submit',(e) =>{
    e.preventDefault();
    if(validUser(fName.value) && vaildEmail(uEmail.value)  && validContact(uContact.value)  &&  validPass(uPass.value)  && cnfPassword(uPass.value, cnfPass.value)
     ){
        fName.value ='';
        uEmail.value ='';
        uContact.value ='';
        uPass.value ='';
        cnfPass.value ='';
        showMessage('msg',"Form filled success-fully")
      }


})