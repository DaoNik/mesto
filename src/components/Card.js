export default class Card {
    constructor(data, handleCardClick) {
        this._templateSelector = data.templateSelector;
        this._nameCard = data.nameCard;
        this._imgCard = data.imgCard;
        this._popup = data.popup;
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick({link: this._imgCard, name: this._nameCard})
        });
        cardTrash.addEventListener('click', () => {
            cardElement.remove();
            cardElement.innerHTML = '';
            this._element = null;
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