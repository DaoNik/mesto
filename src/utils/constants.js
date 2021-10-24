export const openedButtonEdit = document.querySelector('.profile__button-edit');
export const openedButtonAdd = document.querySelector('.profile__button-add');
export const popups = document.querySelectorAll('.popup');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupView = document.querySelector('.popup_view');
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const popupAddForm = popupAdd.querySelector('.popup__form')
export const closedButtons = document.querySelectorAll('.popup__btn-closed');
export const nameInput = popupEdit.querySelector('.popup__input_value_name');
export const profileTitle = document.querySelector('.profile__title');
export const jobInput = popupEdit.querySelector('.popup__input_value_job');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const placeInput = popupAdd.querySelector('.popup__input_value_place');
export const placeLinkInput = popupAdd.querySelector('.popup__input_value_place-link');
export const galleryCards = document.querySelector('.gallery__cards');
export const initialCards = [
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