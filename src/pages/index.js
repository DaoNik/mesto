import {
  openEditProfileBtn,
  openedButtonAdd,
  popupEditForm,
  popupAddForm,
  popupUpdateAvatarForm,
  nameInput,
  jobInput,
  configValidation,
  profileTitle,
  profileSubtitle,
  profileAvatar,
  buttonConfirm,
  buttonUpdateAvatar,
  buttonAdd
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../index.css";

import {
  renderCreating,
  renderDeleting,
  renderSaving
} from "../utils/utils.js";

const popupConfirm = new PopupWithConfirmation(".popup_confirm");
popupConfirm.setDeleteCardHandler((card, id) => {
  card.remove();
  card = null;
  api
    .deleteCard(id, renderDeleting, buttonConfirm)
    .then(res => {
      popupConfirm.close();
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(renderDeleting(false, buttonConfirm));
});

popupConfirm.setEventListeners(buttonConfirm);

const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-29/",
  headers: {
    authorization: "965be665-caac-4684-953a-3ef75da5404d",
    "Content-Type": "application/json"
  }
});

api
  .getUserInfo()
  .then(res => {
    profileTitle.textContent = res.name;
    profileSubtitle.textContent = res.about;
    profileAvatar.src = res.avatar;
    profileAvatar._id = res._id;
  })
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  });

function handleAddLikeCard(cardLike, id) {
  api
    .addLike(id)
    .then(card => {
      cardLike.setAttribute("data-before", card.likes.length);
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    });
}

function handleDeleteLikeCard(cardLike, id) {
  api
    .deleteLike(id)
    .then(card => {
      cardLike.setAttribute("data-before", card.likes.length);
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    });
}

const userInfo = new UserInfo({
  userSelector: ".profile__title",
  infoSelector: ".profile__subtitle"
});

const popupUpdateAvatar = new PopupWithForm(".popup_update-avatar", data => {
  profileAvatar.src = data.link;
  api
    .updateAvatar(data.link, renderSaving, buttonUpdateAvatar)
    .then(res => {
      popupUpdateAvatar.close();
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(renderSaving(false, buttonUpdateAvatar));
});
popupUpdateAvatar.setEventListeners();

const openPopupAvatarBtn = document.querySelector(".profile__container-avatar");
openPopupAvatarBtn.addEventListener("click", () => {
  popupUpdateAvatar.open();
});

const popupEdit = new PopupWithForm(".popup_edit", data => {
  api
    .addNewUserInfo(nameInput, jobInput)
    .then(res => {
      userInfo.setUserInfo(data);
      popupEdit.close();
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    });
});

popupEdit.setEventListeners();

openEditProfileBtn.addEventListener("click", () => {
  const popupEditValues = userInfo.getUserInfo();
  nameInput.value = popupEditValues.user;
  jobInput.value = popupEditValues.info;
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

function createNewCard(card, templateSelector, popup) {
  const cardElement = new Card(
    card,
    handleAddLikeCard,
    handleDeleteLikeCard,
    profileAvatar._id,
    templateSelector,
    popupConfirm,
    ({ link, name }) => {
      popup.open({ link, name });
    }
  );
  const galleryCard = cardElement.generateValue();

  return galleryCard;
}

const cardList = new Section(".gallery__cards");

api
  .addCards()
  .then(cards => {
    const arrayCards = cards.map(cardItem => {
      const galleryCard = createNewCard(cardItem, "#template-card", popupView);
      return galleryCard;
    });
    return Promise.all(arrayCards);
  })
  .then(arrayCards => {
    cardList.renderItems(arrayCards);
  })
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  });

const popupAdd = new PopupWithForm(".popup_add", data => {
  api
    .addNewCard(
      { name: data.name, link: data.link, likes: 0 },
      renderCreating,
      buttonAdd
    )
    .then(card => {
      const newCard = createNewCard(card, "#template-card", popupView);
      cardList.addItem(newCard);
      popupAdd.close();
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(renderCreating(false, buttonAdd));
});

popupAdd.setEventListeners();
openedButtonAdd.addEventListener("click", () => {
  popupAddFormValid.disableSubmitButton();
  popupAdd.open();
});
