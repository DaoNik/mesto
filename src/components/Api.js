export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Произошла ошибка");
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  addNewUserInfo(nameInput, aboutInput) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: nameInput.value,
        about: aboutInput.value
      })
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  addCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  addNewCard({ name, link, likes }, renderCreating) {
    renderCreating(true);
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
        likes: likes
      })
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  addLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }
}
