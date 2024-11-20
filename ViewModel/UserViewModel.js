import { users } from '../Model/Data/Mock/users';

class UserViewModel {
  constructor() {
    this.currentUser = null;
  }

  login(username, password) {
    const user = users.find(
      u =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password.toLowerCase() === password.toLowerCase()
    );
    if (user) {
      this.currentUser = { ...user, isLoggedIn: true };
      console.log("Login successful!");
      return true;
    } else {
      console.log("Invalid username or password.");
      return false;
    }
  }

  logout() {
    if (this.currentUser) {
      this.currentUser.isLoggedIn = false;
      console.log("Logout successful!");
      this.currentUser = null;
    } else {
      console.log("No user is currently logged in.");
    }
  }

  isUserLoggedIn() {
    return this.currentUser !== null && this.currentUser.isLoggedIn;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

export default UserViewModel;
