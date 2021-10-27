export default class UserInfo {
    constructor({userSelector, infoSelector}) {
        this._user = document.querySelector(userSelector);
        this._info = document.querySelector(infoSelector);
    }

    getUserInfo() {
        this._obj = {user: this._user.textContent, info: this._info.textContent};
        return this._obj;
    }

    setUserInfo(data) {
        this._user.textContent = data.name;
        this._info.textContent = data.job;
    }
}