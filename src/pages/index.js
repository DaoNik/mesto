import {
  openedButtonEdit,
  openedButtonAdd,
  popups,
  popupEdit,
  popupAdd,
  popupView,
  popupEditForm,
  popupAddForm,
  closedButtons,
  nameInput,
  profileTitle,
  jobInput,
  profileSubtitle,
  placeInput,
  placeLinkInput,
  galleryCards,
  initialCards
} from '../utils/constants.js'

import {Card} from '../scripts/Card.js';
import {FormValidator} from '../scripts/FormValidator.js';

const configValidation = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
}

const popupEditFormValid = new FormValidator(configValidation, popupEditForm);
popupEditFormValid.enableValidation();
const popupAddFormValid = new FormValidator(configValidation, popupAddForm);
popupAddFormValid.enableValidation();

function newCard(nameCard, imgCard, templateSelector, popup) {
  const cardElement = new Card(nameCard, imgCard, templateSelector, popup, openPopup);
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
  popupAddFormValid.disableSubmitButton();
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
