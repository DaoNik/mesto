export default class UserInfo {
  constructor({ userSelector, infoSelector }) {
    this._user = document.querySelector(userSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo() {
    this._userInfo = {
      user: this._user.textContent,
      info: this._info.textContent
    };
    return this._userInfo;
  }

  setUserInfo(data) {
    if (data.name && data.job) {
      this._user.textContent = data.name;
      this._info.textContent = data.job;
    } else {
      console.log("Не все поля заполнены");
    }
  }
}
