let email1=document.getElementById("email1");
let pwd=document.getElementById("pwd");
function validate()
{
    var regexpemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         //var regexppwd=/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/just edited again
         //if((regexpemail.test(email1.value))&&(pwd.value!=""))
         if(regexpemail.test(email1.value))
         {
             error1.innerHTML=" email is valid";
             error1.style.color="green";
             return true;
        }
         else 
         {
             error1.innerHTML=" email is invalid";
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
var cfpas=document.getElementById("cfpass");
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
       //eml.style.border="5px solid red";
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
       { error2.innerHTML="password is not given";
             return false; }

}

//password strength
var regexp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([A-za-z0-9]{8,})$/
var regexp2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([A-za-z0-9]{5,7})$/
var regexp3=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([A-za-z0-9]{3,4})$/
function strength()
{
if (regexp1.test(crpas.value)) { error2.innerText="password is strong";
                     error2.style.borderColor="green";
                     error2.style.color="green";
                     return true;

                     }
else if (regexp2.test(crpas.value)) { error2.innerText="password is moderate";
                     error2.style.borderColor="orange";
                     error2.style.color="orange";
                     return false;

}
else if(regexp3.test(crpas.value))   { error2.innerText="password is weak";
                     error2.style.borderColor="red";
                     error2.style.color="red";
                     return false;
  }
else   { error2.innerText="Too weak,need one capital letter and one small letter and one digit atleast";
                     error2.style.borderColor="red";
                     error2.style.color="red";
                     return false;
  }
}
function samepass()
{
     if(cfpas.value=="")
     {
          error2.innerHTML="confirm password not given";
          error2.style.color="brown";
          return false;
     }
     else if((crpas.value)==(cfpas.value))
     {
          error2.innerHTML="strong password and successful";
          error2.style.color="green";
          return true;
     }
     else
     {
          error2.innerHTML="Different password";
          error2.style.color="red";
          return false;
     }
}


   