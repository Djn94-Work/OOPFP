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
  
    save() {
      if (ValidateEmail(user.email){
        userLIst.set(email, this);
      }
      return this;
    }
  }

    update() { }
    authenticate() { }
    deauthenticate() { }
  }
}

const user1 = new User("bob@joe.com", "abc123", "abc123");

