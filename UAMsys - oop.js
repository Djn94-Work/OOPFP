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
class User {
  constructor(email, password, passwordConfirm) {
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
  signUp() {
    if (
      ValidateEmail(user.email) &&
      !user.email in userList &&
      password === passwordConfirm
    ) {
      userList.set(email, this);
    }
  }
  signIn() {
    if (user.email in userList && passwordInput === user.password) {
      console.log("user is signed in!");
    }
  }
  deleteAcct() {
    if (passwordInput === user.password) {
      userList.set(this, "");
    }
  }
  passwordChange() {
    if (passwordInput === user.password) {
      userList.set(this.password, newPassword);
    }
  }
}

const user1 = new User("bob@joe.com", "abc123", "abc123");

//sign up sign in sign out change pw
user1.signUp();
