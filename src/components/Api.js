export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._body = options.body;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("Произошла ошибка");
  }

  getUserInfo() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers
    })
      .then(res => {
        return this._checkRequest(res);
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
      return this._checkRequest(res);
    });
  }

  addNewCard(
    createNewCard,
    apiDeleteCard,
    popupView,
    galleryCards,
    renderCreating
  ) {
    renderCreating(true);
    return fetch(this._url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: this._body.name,
        link: this._body.link,
        likes: this._body.likes
      })
    })
      .then(res => {
        return this._checkRequest(res);
      })
      .then(card => {
        const newCard = createNewCard(
          card,
          apiDeleteCard,
          "#template-card",
          popupView
        );
        galleryCards.prepend(newCard);
      })
      .finally(renderCreating(false));
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
    return fetch(`${this._url}/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(res => {
      return this._checkRequest(res);
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
    }).then(res => {
      return this._checkRequest(res);
    });
  }
}
