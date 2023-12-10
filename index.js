function validateEmail() {
  var email = prompt("Enter an email address:");

  var emailRegex = /\S+@\S+\.\S+/;
  var isValid = emailRegex.test(email);

  if (isValid) {
    alert("Email is valid");
  } else {
    alert("Email is not valid");
  }
}

function validatePhoneNumber() {
  var phoneNumber = prompt("Enter a phone number:");

  var phoneRegex = /^\d{11}$/;
  var isValid = phoneRegex.test(phoneNumber);

  if (isValid) {
    alert("Phone number is valid");
  } else {
    alert("Phone number is not valid");
  }
}

function validatePostCode() {
  var postCode = prompt("Enter a post code:");

  var postRegex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  var isValid = postRegex.test(postCode);

  if (isValid) {
    alert("Post code is valid");
  } else {
    alert("Post code is not valid");
  }
}
