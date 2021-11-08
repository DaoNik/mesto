import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  open(card, id) {
    super.open();

    this._card = card;
    this._id = id;
  }

  setDeleteCardHandler(handler) {
    this._handleDeleteCard = handler;
  }

  setEventListeners(buttonConfirm) {
    super.setEventListeners();
    buttonConfirm.addEventListener("click", () => {
      this._handleDeleteCard(this._card, this._id);
    });
  }
}
