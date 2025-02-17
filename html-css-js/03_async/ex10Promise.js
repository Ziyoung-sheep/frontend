class User {
  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
}

class UserManager {
  loginUser(user, inputArr) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (inputArr[0] === user.id && inputArr[1] === user.password) {
          resolve(user);
        } else {
          reject(new Error('login failed'));
        }
      }, 2000)
    })

  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user || !(user instanceof User)) {
          reject(new Error('access denied'));
        } else if (user.id == 'admin') {
          resolve({ name: user.id, role: '관리자' });
        } else {
          resolve({ name: user.id, role: '일반회원' });
        }
      }, 1000);
    });

  }
}
const um = new UserManager();

const user1 = new User('admin', '1234');
const user2 = new User('test', '1111');

const input1 = ['admin', '1234'];
const input2 = ['test1', '1111'];
const input3 = ['test', '1111'];

um.loginUser(user2, input3)
  .then((user) => um.getRoles(user))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));