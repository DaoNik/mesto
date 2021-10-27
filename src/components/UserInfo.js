class UserInfo {
    constructor({userSelector, infoSelector}) {
        this._user = document.querySelector(userSelector);
        this._info = document.querySelector(infoSelector);
    }

    getUserInfo() {
        this.obj = {user: this._user, info: this._info};
    }

    setUserInfo() {
        
    }
}