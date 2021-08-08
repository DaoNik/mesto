const openedButtonEdit = document.querySelector('.profile__button-edit');
const openedButtonAdd = document.querySelector('.profile__button-add');
const popup = document.querySelectorAll('popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupView = document.querySelector('.popup_view');
const popupViewImg = popupView.querySelector('.popup__view-image');
const popupViewTitle = popupView.querySelector('.popup__view-title');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupAddForm = popupAdd.querySelector('.popup__form')
const closedButton = document.querySelectorAll('.popup__btn-closed');
const nameImport = popupEdit.querySelector('.popup__input-text_value_name');
const profileTitle = document.querySelector('.profile__title');
const jobImport = popupEdit.querySelector('.popup__input-text_value_job');
const profileSubtitle = document.querySelector('.profile__subtitle');
const placeImport = popupAdd.querySelector('.popup__input-text_value_place');
const placeLinkImport = popupAdd.querySelector('.popup__input-text_value_place-link');
const galleryCards = document.querySelector('.gallery__cards');
const templateCard = document.getElementById('template-card').content;
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

function newCard(nameCard, imgCard) {
    const galleryCard = templateCard.querySelector('.gallery__card').cloneNode(true);
    const galleryCardTitle = galleryCard.querySelector('.gallery__card-title');
    const galleryCardImg = galleryCard.querySelector('.gallery__card-img');    
    galleryCardTitle.textContent = nameCard;
    galleryCardImg.src = imgCard;
    galleryCardImg.alt = nameCard;
    return galleryCard;
}

for (let i = 0; i < initialCards.length; i++) {
    const galleryCard = newCard(initialCards[i].name, initialCards[i].link);
    galleryCards.append(galleryCard);
}

function openPopup (popup) {
    popup.classList.add('popup_opened');    
}

function openPopupEdit () {
    openPopup(popupEdit);
    nameImport.value = profileTitle.textContent;
    jobImport.value = profileSubtitle.textContent;
}

function openPopupAdd () {
    openPopup(popupAdd);
}

function closePopup (evt, popup) {
  if (popup === undefined) {
    popup = evt.target.parentElement.parentElement;
  }
    popup.classList.remove('popup_opened');
}

function formEditSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameImport.value;
    profileSubtitle.textContent = jobImport.value;
    closePopup(evt, evt.target.parentElement.parentElement);
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();
    const galleryCard = newCard(placeImport.value, placeLinkImport.value);
    galleryCards.prepend(galleryCard);
    closePopup(evt, evt.target.parentElement.parentElement);
}

function clickGallery (evt) {
    if (evt.target.classList[0] === 'gallery__card-btn') {
      evt.target.classList.toggle('gallery__card-btn_active');
    }

    if (evt.target.classList.value === 'gallery__card-btn-trash') {
      evt.target.parentElement.remove();
    }   

    if (evt.target.classList[0] === 'gallery__card-img') {
      const galleryCard = evt.target.parentElement;
      popupViewImg.src = evt.target.src;
      popupViewImg.alt = galleryCard.firstElementChild.textContent;
      popupViewTitle.textContent = galleryCard.firstElementChild.textContent;
      openPopup(popupView);
    }
}

openedButtonEdit.addEventListener('click', openPopupEdit);
openedButtonAdd.addEventListener('click', openPopupAdd);
for (let i = 0; i < closedButton.length; i++) {
  closedButton[i].addEventListener('click', closePopup);
}
popupEditForm.addEventListener('submit', formEditSubmitHandler);
popupAddForm.addEventListener('submit', formAddSubmitHandler);
galleryCards.addEventListener('click', clickGallery);