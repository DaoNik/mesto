import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    open({ link, name }) {
        this._popup.querySelector('.popup__view-title').textContent = name;
        const imageElement = this._popup.querySelector('.popup__view-image');
        imageElement.src = link;
        imageElement.alt = name;
        super.open();
    }
}