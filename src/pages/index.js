import {
  openedButtonEdit,
  openedButtonAdd,
  popupEditForm,
  popupAddForm,
  nameInput,
  jobInput,
  configValidation,
  initialCards
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../index.css";

const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-29/users/me",
  headers: {
    authorization: "965be665-caac-4684-953a-3ef75da5404d",
    "Content-Type": "application/json"
  }
});

api.getUserInfo();

const userInfo = new UserInfo({
  userSelector: ".profile__title",
  infoSelector: ".profile__subtitle"
});
const popupEdit = new PopupWithForm(".popup_edit", data => {
  userInfo.setUserInfo(data);
});
popupEdit.setEventListeners();
openedButtonEdit.addEventListener("click", () => {
  const popupEditValues = userInfo.getUserInfo();
  nameInput.value = popupEditValues.user;
  jobInput.value = popupEditValues.info;
  popupEditFormValid.enableValidation();
  popupEdit.open();
});

const popupView = new PopupWithImage(".popup_view");
popupView.setEventListeners();

const popupEditFormValid = new FormValidator(configValidation, popupEditForm);
popupEditFormValid.enableValidation();
const popupAddFormValid = new FormValidator(configValidation, popupAddForm);
popupAddFormValid.enableValidation();

function createNewCard(nameCard, imgCard, templateSelector, popup) {
  const data = { nameCard, imgCard };
  const cardElement = new Card(data, templateSelector, ({ link, name }) => {
    popup.open({ link, name });
  });
  const galleryCard = cardElement.generateValue();

  return galleryCard;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: cardItem => {
      const galleryCard = createNewCard(
        cardItem.name,
        cardItem.link,
        "#template-card",
        popupView
      );
      cardList.addItem(galleryCard);
    }
  },
  ".gallery__cards"
);

cardList.renderItems();

const popupAdd = new PopupWithForm(".popup_add", data => {
  cardList.addItem(
    createNewCard(data.name, data.link, "#template-card", popupView)
  );
});

popupAdd.setEventListeners();
openedButtonAdd.addEventListener("click", () => {
  popupAddFormValid.disableSubmitButton();
  popupAdd.open();
});
