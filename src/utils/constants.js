export const openedButtonEdit = document.querySelector(".profile__button-edit");
export const openedButtonAdd = document.querySelector(".profile__button-add");
export const popupEdit = document.querySelector(".popup_edit");
export const popupAdd = document.querySelector(".popup_add");
export const popupEditForm = popupEdit.querySelector(".popup__form");
export const popupAddForm = popupAdd.querySelector(".popup__form");
export const popupUpdateAvatarForm = document.forms.popupUpdateAvatarForm;
export const nameInput = popupEdit.querySelector(".popup__input_value_name");
export const jobInput = popupEdit.querySelector(".popup__input_value_job");
export const configValidation = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__input_type_error"
};
export const galleryCards = document.querySelector(".gallery__cards");
