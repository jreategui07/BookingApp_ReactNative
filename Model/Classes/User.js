class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = false;
  }

  login = (inputUsername, inputPassword) => {
    if (inputUsername === this.username && inputPassword === this.password) {
      this.isLoggedIn = true;
      console.log("Login successful!");
      return true;
    } else {
      console.log("Invalid username or password.");
      return false;
    }
  };

  logout = () => {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      console.log("Logout successful!");
    } else {
      console.log("User is not logged in.");
    }
  };
}

export default User
