// const user = {

//   signUp(user) {
//     console.log(user+'sign up');
//     };
//     signIn(user) {
//         console.log(user+'sign in')
//     };
//     signOut(user) {
//         console.log(user+'sign out')
//     };
//     passChange(user) {
//         console.log(user + 'password change')
//     }
// };
function User(email, password, passwordConfirm) {
  this.email = email;
  this.password = password;
  this.passwordConfirm;
}
