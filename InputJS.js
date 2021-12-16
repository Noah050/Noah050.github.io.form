var uname = document.Regristration.uname;
function checkUser(uname) {
    var letters = /^[A-Z a-z]+$/;
    if (uname.value == "") {
        alert("Please Enter A Username")
        return false;
    } else {
        if (uname.value.match(letters)) {
            
        } else {
            alert("Only Alphabet Characters For Username")
            return false;
        }
    }
    
}
var pass = document.Regristration.pass;
function checkPass(pass) {
    var letters = /^[A-Z a-z 0-9]+$/;
    if (pass.value == "") {
        alert("Please Enter A Password")
        return false;
    } else {
        if (pass.value.match(letters)) {
            
        } else {
            alert("Only Alphabet and Numerical Characters For Password")
            return false;
        }
    }
    
}
var phone = document.Regristration.phone;
function checkPhone(phone) {
   var letters = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/; 
   if (phone.value == "") {
       alert("Enter A Phone Number");
       return false;
   } else {
       if (phone.value.match(letters)) {

       } else {
           alert("123-456-7890 For Phone Number");
           return false;
       }
   }

}
