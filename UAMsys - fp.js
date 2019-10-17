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
    userList.set(email, user.email);
    console.log('email validated')
  }
}

signIn(user){
if (samplePassw)
  if (ValidateEmail(sampleEmail)){
      console.log('signed in!')
    }
}
signOut(user){
  console.log('signed out');
}

passwordChange(user){
if(samplePass === this.password){
 this.password = newPassword 
}
}

module.exports = { User };
