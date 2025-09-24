export class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const UserInfos = {};
    UserInfos.userName = this._name.textContent;
    UserInfos.info = this._info.textContent;

    return UserInfos;
  }

  setUserInfo(name, info) {
    this._name.textContent = name;
    this._info.textContent = info;
  }
}
