const openedButtonEdit = document.querySelector('.profile__button-edit');
const openedButtonAdd = document.querySelector('.profile__button-add');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupView = document.querySelector('.popup_view');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupAddForm = popupAdd.querySelector('.popup__form')
const closedButtons = document.querySelectorAll('.popup__btn-closed');
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const profileTitle = document.querySelector('.profile__title');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const profileSubtitle = document.querySelector('.profile__subtitle');
const placeInput = popupAdd.querySelector('.popup__input_value_place');
const placeLinkInput = popupAdd.querySelector('.popup__input_value_place-link');
const galleryCards = document.querySelector('.gallery__cards');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const configValidation = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
}

function newCard(nameCard, imgCard, templateSelector, popup) {
  const cardElement = new Card(nameCard, imgCard, templateSelector, popup, () => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupPressEsc);
  });
  const galleryCard = cardElement.generateValue();
  
  return galleryCard;
}

initialCards.forEach((initialCard) => {
  const galleryCard = newCard(initialCard.name, initialCard.link, '#template-card', popupView);
  galleryCards.append(galleryCard);
})

const closePopupPressEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    const popupForm = popup.querySelector('.popup__form');
    const formValidation = new FormValidator(configValidation, popupForm);
    formValidation.enableValidation();
    document.addEventListener('keydown', closePopupPressEsc);
}

function openPopupEdit() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEdit);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupPressEsc);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const galleryCard = newCard(placeInput.value, placeLinkInput.value, '#template-card', popupView);
    galleryCards.prepend(galleryCard);
    popupAddForm.reset();
    closePopup(popupAdd);
}

openedButtonEdit.addEventListener('click', openPopupEdit);
openedButtonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

closedButtons.forEach(closedButton => {
  const popup = closedButton.closest('.popup');
  closedButton.addEventListener('click', () => closePopup(popup));
})

popupEditForm.addEventListener('submit', handleProfileFormSubmit);
popupAddForm.addEventListener('submit', handleAddCardFormSubmit);

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
})
