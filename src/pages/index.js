import {
  openedButtonEdit,
  openedButtonAdd,
  popups,
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
  configValidation,
  initialCards
} from '../utils/constants.js'

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const popupEdit = new PopupWithForm('.popup_edit', data => {

});


const popupView = new PopupWithImage('.popup_view');
popupView.setEventListeners();

const popupEditFormValid = new FormValidator(configValidation, popupEditForm);
popupEditFormValid.enableValidation();
const popupAddFormValid = new FormValidator(configValidation, popupAddForm);
popupAddFormValid.enableValidation();

function newCard(nameCard, imgCard, templateSelector, popup) {
  const cardElement = new Card(nameCard, imgCard, templateSelector, popup);
  const galleryCard = cardElement.generateValue();
  
  return galleryCard;
}

const cardList = new Section({items: initialCards, renderer: (cardItem) => {
    const galleryCard = newCard(cardItem.name, cardItem.link, '#template-card', popupView);
    cardList.addItem(galleryCard);
}}, galleryCards);

cardList.renderItems();

const popupAdd = new PopupWithForm('.popup_add', (data) => {
  cardList.addItem(newCard(data.name, data.link, '#template-card', popupView));
});

popupAdd.setEventListeners();
openedButtonAdd.addEventListener('click', () => {
  popupAddFormValid.disableSubmitButton();
  popupAdd.open();
});

// initialCards.forEach((initialCard) => {
//   const galleryCard = newCard(initialCard.name, initialCard.link, '#template-card', popupView);
//   galleryCards.append(galleryCard);
// })

// const closePopupPressEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupPressEsc);
// }

// function openPopupEdit() {
//     nameInput.value = profileTitle.textContent;
//     jobInput.value = profileSubtitle.textContent;
//     openPopup(popupEdit);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupPressEsc);
// }

// function handleProfileFormSubmit(evt) {
//     evt.preventDefault();
//     profileTitle.textContent = nameInput.value;
//     profileSubtitle.textContent = jobInput.value;
//     closePopup(popupEdit);
// }

// function handleAddCardFormSubmit(evt) {
//     evt.preventDefault();
//     const galleryCard = newCard(placeInput.value, placeLinkInput.value, '#template-card', popupView);
//     galleryCards.prepend(galleryCard);
//     popupAddForm.reset();
//     closePopup(popupAdd);
// }

// openedButtonEdit.addEventListener('click', openPopupEdit);


// closedButtons.forEach(closedButton => {
//   const popup = closedButton.closest('.popup');
//   closedButton.addEventListener('click', () => closePopup(popup));
// })

// popupEditForm.addEventListener('submit', handleProfileFormSubmit);
// popupAddForm.addEventListener('submit', handleAddCardFormSubmit);

// popups.forEach(popup => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//       closePopup(popup);
//     }
//   });
// })
