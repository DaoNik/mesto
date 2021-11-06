import {
  openedButtonEdit,
  openedButtonAdd,
  popupEditForm,
  popupAddForm,
  popupUpdateAvatarForm,
  nameInput,
  jobInput,
  configValidation,
  galleryCards
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../index.css";

const popupConfirm = new Popup(".popup_confirm");
popupConfirm.setEventListeners();

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

const popupUpdateAvatar = new PopupWithForm(".popup_update-avatar", data => {
  const profileAvatar = document.querySelector(".profile__avatar");
  profileAvatar.src = data.link;
  userApi.updateAvatar(data.link);
});
popupUpdateAvatar.setEventListeners();

const popupAvatar = document.querySelector(".profile__container-avatar");
popupAvatar.addEventListener("click", () => {
  popupUpdateAvatar.open();
  popupUpdateAvatarFormValid.enableValidation();
});

const popupEdit = new PopupWithForm(".popup_edit", data => {
  userInfo.setUserInfo(data);
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
const popupUpdateAvatarFormValid = new FormValidator(
  configValidation,
  popupUpdateAvatarForm
);
popupUpdateAvatarFormValid.enableValidation();

function createNewCard(card, apiDeleteCard, templateSelector, popup) {
  const cardElement = new Card(
    card,
    popupConfirm,
    apiDeleteCard,
    templateSelector,
    ({ link, name }) => {
      popup.open({ link, name });
    }
  );
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

const apiDeleteCard = new Api({
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
          cardItem,
          apiDeleteCard,
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
  newCardApi.addNewCard(createNewCard, apiDeleteCard, popupView, galleryCards);
});

popupAdd.setEventListeners();
openedButtonAdd.addEventListener("click", () => {
  popupAddFormValid.disableSubmitButton();
  popupAdd.open();
});
