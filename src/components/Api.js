export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._body = options.body;
  }

  getUserInfo() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Произошла ошибка");
      })
      .then(res => {
        this._title = document.querySelector(".profile__title");
        this._subtitle = document.querySelector(".profile__subtitle");
        this._avatar = document.querySelector(".profile__avatar");

        this._title.textContent = res.name;
        this._subtitle.textContent = res.about;
        this._avatar.src = res.avatar;
      });
  }

  addCards() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  addNewCard() {
    return fetch(this._url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: this._body.name,
        link: this._body.link,
        likes: this._body.likes
      })
    });
  }

  addNewUserInfo() {
    return fetch(this._url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: this._body.name.value,
        about: this._body.about.value
      })
    });
  }
}
