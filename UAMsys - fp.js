userList = new Map();
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function ValidateEmail(inputText) {
  if (inputText.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
User = {
  email = this.email,
  password = this.password,
  passwordConfirm = this.passwordConfirm
}
signUp(user){
  if (ValidateEmail(sampleEmail)) {
    userList.set(email, user.email)
  }
}

signIn(user){
if (samplePassw)
  if (ValidateEmail(sampleEmail){
      
    })
}


module.exports = { User };
