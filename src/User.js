class User {
  constructor(name, reports = []) {
    this.name = name;
    this.reports = reports;
  }

  isSeniorToUserNamed(userName) {
    if (this.name.toLowerCase() === userName.toLowerCase()) {
      return true;
    } else {
      for (let i = 0; i < this.reports.length; i++) {
        if (this.reports[i].isSeniorToUserNamed(userName)) {
          return true;
        }
      }
      return false;
    }
  }
}

export default User;
