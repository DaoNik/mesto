class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open() {
        super(open);
        const popupViewImg = this._popup.querySelector('.popup__view-image');
        const popupViewTitle = this._popup.querySelector('.popup__view-title');
        popupViewImg.src = this._imgCard;
        popupViewImg.alt = this._nameCard;
        popupViewTitle.textContent = this._nameCard;
    }
}