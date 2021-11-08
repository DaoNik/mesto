import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  open(card, id) {
    super.open();

    this._card = card;
    this._id = id;
  }

  setEventListeners(buttonConfirm, handleDeleteCard) {
    super.setEventListeners();
    buttonConfirm.addEventListener("click", () => {
      handleDeleteCard(this._card, this._id);
    });
  }
}
