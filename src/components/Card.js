export default class Card {
  constructor(
    card,
    popupConfirm,
    apiDeleteCard,
    templateSelector,
    handleCardClick
  ) {
    this._templateSelector = templateSelector;
    this._nameCard = card.name;
    this._imgCard = card.link;
    this._likesArray = card.likes;
    this._likesNumber = card.likes.length;
    this._id = card._id;
    this._ownerId = card.owner._id;
    this._popupConfirm = popupConfirm;
    this._handleCardClick = handleCardClick;
    this._apiDeleteCard = apiDeleteCard;
    this._myId = "f8530b92003a644ff06c1637";
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
    if (this._ownerId != this._myId) {
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
        this._likesNumber++;
        cardLike.setAttribute("data-before", this._likesNumber);
        this._apiDeleteCard.addLike(this._id);
      } else {
        this._likesNumber--;
        cardLike.setAttribute("data-before", this._likesNumber);
        this._apiDeleteCard.deleteLike(this._id);
      }
    });
  }

  generateValue() {
    this._element = this._getTemplate();
    const cardTitle = this._element.querySelector(".gallery__card-title");
    const cardImg = this._element.querySelector(".gallery__card-img");
    const cardTrash = this._element.querySelector(".gallery__card-btn-trash");
    const cardLike = this._element.querySelector(".gallery__card-btn");
    this._likesArray.forEach(likeOwner => {
      if (likeOwner._id == this._myId) {
        cardLike.classList.add("gallery__card-btn_active");
      }
    });
    cardLike.setAttribute("data-before", this._likesNumber);
    cardTitle.textContent = this._nameCard;
    cardImg.src = this._imgCard;
    cardImg.alt = this._nameCard;
    this._setEventListeners(cardImg, cardTrash, cardLike, this._element);
    return this._element;
  }
}
