import {
  openedButtonEdit,
  openedButtonAdd,
  popupEditForm,
  popupAddForm,
  nameInput,
  jobInput,
  configValidation,
  galleryCards
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../index.css";

const userApi = new Api({
  url: "https://nomoreparties.co/v1/cohort-29/users/me",
  headers: {
    authorization: "965be665-caac-4684-953a-3ef75da5404d",
    "Content-Type": "application/json"
  }
});

userApi.getUserInfo();

const newUserInfo = new Api({
  url: "https://nomoreparties.co/v1/cohort-29/users/me",
  headers: {
    authorization: "965be665-caac-4684-953a-3ef75da5404d",
    "Content-Type": "application/json"
  },
  body: { name: nameInput, about: jobInput }
});

const userInfo = new UserInfo({
  userSelector: ".profile__title",
  infoSelector: ".profile__subtitle"
});

const popupEdit = new PopupWithForm(".popup_edit", data => {
  userInfo.setUserInfo(data);
  debugger;
  newUserInfo.addNewUserInfo();
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

function createNewCard(nameCard, imgCard, likes, templateSelector, popup) {
  const data = { nameCard, imgCard, likes };
  const cardElement = new Card(data, templateSelector, ({ link, name }) => {
    popup.open({ link, name });
  });
  const galleryCard = cardElement.generateValue();

  return galleryCard;
}

const cardApi = new Api({
  url: "https://nomoreparties.co/v1/cohort-29/cards",
  headers: {
    authorization: "965be665-caac-4684-953a-3ef75da5404d",
    "Content-Type": "application/json"
  }
});

cardApi.addCards().then(cards => {
  const cardList = new Section(
    {
      items: cards,
      renderer: cardItem => {
        const galleryCard = createNewCard(
          cardItem.name,
          cardItem.link,
          cardItem.likes.length,
          "#template-card",
          popupView
        );
        cardList.addItem(galleryCard);
      }
    },
    ".gallery__cards"
  );

  cardList.renderItems();
});

const popupAdd = new PopupWithForm(".popup_add", data => {
  const newCard = createNewCard(
    data.name,
    data.link,
    0,
    "#template-card",
    popupView
  );
  galleryCards.append(newCard);
  const newCardApi = new Api({
    url: "https://nomoreparties.co/v1/cohort-29/cards",
    headers: {
      authorization: "965be665-caac-4684-953a-3ef75da5404d",
      "Content-Type": "application/json"
    },
    body: {
      name: data.name,
      link: data.link,
      likes: 0
    }
  });
  newCardApi.addNewCard();
});

popupAdd.setEventListeners();
openedButtonAdd.addEventListener("click", () => {
  popupAddFormValid.disableSubmitButton();
  popupAdd.open();
});
