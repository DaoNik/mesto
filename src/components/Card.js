export default class Card {
    constructor(nameCard, imgCard, templateSelector, popup, openPopup) {
        this._templateSelector = templateSelector;
        this._nameCard = nameCard;
        this._imgCard = imgCard;
        this._popup = popup;
        this._open = openPopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners(cardImg, cardTrash, cardLike, cardElement) {
        cardImg.addEventListener('click', () => {
            const popupViewImg = this._popup.querySelector('.popup__view-image');
            const popupViewTitle = this._popup.querySelector('.popup__view-title');
            popupViewImg.src = this._imgCard;
            popupViewImg.alt = this._nameCard;
            popupViewTitle.textContent = this._nameCard;
            this._open(this._popup);
        })
        cardTrash.addEventListener('click', () => {
            cardElement.remove();
            cardElement.innerHTML = '';
        });
        cardLike.addEventListener('click', () => {
            cardLike.classList.toggle('gallery__card-btn_active');
        })
    }

    generateValue() {
        this._element = this._getTemplate();
        const cardTitle = this._element.querySelector('.gallery__card-title');
        const cardImg = this._element.querySelector('.gallery__card-img');   
        const cardTrash = this._element.querySelector('.gallery__card-btn-trash'); 
        const cardLike = this._element.querySelector('.gallery__card-btn');
        cardTitle.textContent = this._nameCard;
        cardImg.src = this._imgCard;
        cardImg.alt = this._nameCard;
        this._setEventListeners(cardImg, cardTrash, cardLike, this._element);
        return this._element;
    }


}