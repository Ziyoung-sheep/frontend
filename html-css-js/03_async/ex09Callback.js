class User {
  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
}

class UserManager {
  loginUser(user, inputArr, onLoginFn, onFailFn) {
    setTimeout(() => {
      if (inputArr[0] === user.id && inputArr[1] === user.password) {
        onLoginFn(user);
      } else {
        onFailFn(new Error('login failed'));
      }
    }, 2000)
  }
  getRoles(user, onSuccessFn, onErrorFn) {
    setTimeout(() => {
      if (!user || !(user instanceof User)) {
        onErrorFn(new Error('access denied'));
      } else if (user.id == 'admin') {
        onSuccessFn({ name: user.id, role: '관리자' });
      } else {
        onSuccessFn({ name: user.id, role: '일반회원' });
      }
    }, 1000);
  }
}
const um = new UserManager();

const user1 = new User('admin', '1234');
const user2 = new User('test', '1111');
const user3 = new Object('test1', '1111');

const input1 = ['admin', '1234'];
const input2 = ['test1', '1111'];
const input3 = ['test', '1111'];

um.loginUser(user3, input2, (user3) => {
  um.getRoles(user3, (member) => console.log(`${member.name}님은 ${member.role}입니다`), (error) => console.log(error))
}, (error) => console.log(error))