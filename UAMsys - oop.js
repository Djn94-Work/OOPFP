userList = new Map();

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
  
    signUp() {
      if (ValidateEmail(user.email){
        userLIst.set(email, this);
      }
      return this;
    }
  }

  signIn() {
    if (samplePass === this.password) {
      console.log('successful login');
      }
     }
  signOut() { 
    console.log('successful logout');
  }
  
  passChange() { 
    if (samplePass === this.password) {
      this.password = newPass;
      }
    }
  }
  

const user1 = new User("bob@joe.com", "abc123", "abc123");

