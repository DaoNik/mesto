export default class Card {
  constructor(data, apiDeleteCard, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._nameCard = data.nameCard;
    this._imgCard = data.imgCard;
    this._likes = data.likes;
    this._id = data.id;
    this._ownerId = data.ownerId;
    this._popupConfirm = data.popupConfirm;
    this._handleCardClick = handleCardClick;
    this._apiDeleteCard = apiDeleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners(cardImg, cardTrash, cardLike, cardElement) {
    cardImg.addEventListener("click", () => {
      this._handleCardClick({ link: this._imgCard, name: this._nameCard });
    });
    if (this._ownerId != "f8530b92003a644ff06c1637") {
      cardTrash.remove();
    } else {
      cardTrash.addEventListener("click", () => {
        this._popupConfirm.open();
        const buttonConfirm = document.querySelector(".popup__btn_confirm");
        buttonConfirm.addEventListener("click", () => {
          cardElement.remove();
          cardElement = null;
          this._apiDeleteCard.deleteCard(this._id);
          this._popupConfirm.close();
        });
      });
    }
    cardLike.addEventListener("click", () => {
      cardLike.classList.toggle("gallery__card-btn_active");
      if (cardLike.classList.contains("gallery__card-btn_active")) {
        this._likes++;
        cardLike.setAttribute("data-before", this._likes);
      } else {
        this._likes--;
        cardLike.setAttribute("data-before", this._likes);
      }
    });
  }

  generateValue() {
    this._element = this._getTemplate();
    const cardTitle = this._element.querySelector(".gallery__card-title");
    const cardImg = this._element.querySelector(".gallery__card-img");
    const cardTrash = this._element.querySelector(".gallery__card-btn-trash");
    const cardLike = this._element.querySelector(".gallery__card-btn");
    cardLike.setAttribute("data-before", this._likes);
    cardTitle.textContent = this._nameCard;
    cardImg.src = this._imgCard;
    cardImg.alt = this._nameCard;
    this._setEventListeners(cardImg, cardTrash, cardLike, this._element);
    return this._element;
  }
}
