var recaptcha_response = '';
function submitUserForm() {
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}
 
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

// reg form js code

function signup(){

   var first_name = document.getElementById('firstname').value;
   var last_name = document.getElementById('lastname').value;
   var email_ID = document.getElementById('emailid').value;
   var msg_txt = document.getElementById('msgtxt').value;
    
   if (first_name == "" || last_name == "" || email_ID == "" || msg_txt == "")
   { 
      document.getElementById("con").disabled = true;
      alert("The mandatory fields are empty. Please try again.");  	
      return false; 
   }
   else{
      window.open("success.html", "_blank");
   }
}
document.getElementById("con").disabled = true;
// document.getElementById("msgtxt").addEventListener("mouseleave", mouseLeave);
function mouseLeave(){
   document.getElementById("con").disabled = false;
}

