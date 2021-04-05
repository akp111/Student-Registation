function validate() {
  var result = "";
  result += validateName();
  result += validateEmail();
  result += validatePassword();
  result += validateTerms();
  result += validateDOB()
  if (result == "") return true;

  alert("Validation Result:\n\n" + result);
  return false;
}

function validateName() {
  var name = document.getElementsByName("name")[0].value;
  if (name.length <= 3)
    document.getElementById("name_error").innerHTML="Name should be at least three characters.\n";
  return "";
}

function validatePassword() {
  var password = valueOf("password");
  var retype = valueOf("retype_password");

  if (password.length <= 6)
  document.getElementById("password_error").innerHTML="Password should be at least 6 characters.\n";

  if (password != retype)
  document.getElementById("password_error").innerHTML="Passwords do not match.\n";
  return "";
}

function validateEmail() {
  var email = valueOf("email");
  var retype = valueOf("retype_email");

  if (email.indexOf('@') == -1)
  document.getElementById("email_error").innerHTML="Email should be a valid address.\n";

  if (email != retype)
  document.getElementById("email_error").innerHTML="Email addresses do not match.\n";
  return "";
}

// function validateTerms() {
//   var terms = document.getElementsByName("terms")[0];
//   if (!terms.checked)
//   document.getElementById("password_error").innerHTML="Please accept the Terms of Service and Privacy Policy";
//   return "";
// }

function validateDOB() {
  var date = document.getElementsByName("date")[0].value;
  if (!date)
    return "Please eneter DOB"
  var age = Math.floor((new Date() - new Date(date).getTime()) / 3.15576e+10)
  if (age > 18)
    return ""
  else
    return "Not old enough"
}

function valueOf(name) {
  return document.getElementsByName(name)[0].value;
}