let email1=document.getElementById("email1");
let pwd=document.getElementById("pwd");
function validate()
{
    var regexpemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         //var regexppwd=/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
         if((regexpemail.test(email.value))&&(pwd.value!=""))
         {
             error1.innerHTML=" email and password is valid";
             error1.style.color="green";
             return true;
        }
         else 
         {
             error1.innerHTML=" email or password is invalid";
             error1.style.color="red";
             return false;
      
         }
}
         

//variable declarations for pattern check
//var fstname=document.getElementById("fname");
//var lstname=document.getElementById("lname");
var email=document.getElementById("eml");
var phno=document.getElementById("phn");
//var cty=document.getElementById("city");
//var cntry=document.getElementById("country");
var crpas=document.getElementById("crpass");
//var cfpas=document.getElementById("cfpass");
//var passpow=document.getElementById("power");

//pattern definitions
//var fnameexp=/^([A-Za-z]{1,20})$/;
//var lnameexp=/^([A-Za-z]{1,20})$/;                          
var emlexp=/^([\w\.\-]+)@([a-z]{2,20})\.([a-z]{2,5})(\.[a-z]{2,4})?$/;
var phnexp=/^([0-9]{3})[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/;
//var cityexp=/^([A-Za-z]{1,20})$/;
//var countryexp=/^([A-Za-z]{1,20})$/;
//var crpassexp=/^([\w]+[\@$#%&!^*]+)$/;
//var cfpassexp=/^([\w]+[\@$#%&!^*]+)$/;

//javascript validation of form
//email validation

function emailtest()
{
     if (emlexp.test(email.value)) { return true;}
       else 
       { error2.innerHTML="email is not valid";
             return false; }
}

//mobile validation

function phntest()
{
     if (phnexp.test(phno.value)) { return true;}
       else 
       { error2.innerHTML="phone number is not valid";
             return false; }
}


//password validation
function passtest()
{
     if (crpas.value!="") { return true;}
       else 
       { error2.innerHTML="password is not valid";
             return false; }

}

//password strength
function strength()
{
if (crpas.value.length<5) { error2.innerText="password is weak";
                     error2.style.borderColor="red";
                     error2.style.color="red";
                     return false;

                     }
else if (crpas.value.length>=5 && crpas.value.length<10 ) { error2.innerText="password is moderate";
                     error2.style.borderColor="orange";
                     error2.style.color="orange";
                     return false;

}
else   { error2.innerText="password is strong";
                     error2.style.borderColor="green";
                     error2.style.color="green";
                     return true;
  }
}


   