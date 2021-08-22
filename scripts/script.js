const openedButtonEdit = document.querySelector('.profile__button-edit');
const openedButtonAdd = document.querySelector('.profile__button-add');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupView = document.querySelector('.popup_view');
const popupViewImg = popupView.querySelector('.popup__view-image');
const popupViewTitle = popupView.querySelector('.popup__view-title');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupAddForm = popupAdd.querySelector('.popup__form')
const closedButtons = document.querySelectorAll('.popup__btn-closed');
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
    galleryCards.addEventListener('click', clickGallery);
    return galleryCard;
}

initialCards.forEach((initialCard) => {
  const galleryCard = newCard(initialCard.name, initialCard.link);
  galleryCards.append(galleryCard);
})

function openPopup (popup) {
    popup.classList.add('popup_opened');    
}

function openPopupEdit () {
    openPopup(popupEdit);
    nameImport.value = profileTitle.textContent;
    jobImport.value = profileSubtitle.textContent;
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  popupAddForm.reset();
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameImport.value;
    profileSubtitle.textContent = jobImport.value;
    closePopup(popupEdit);
}

function handleAddCardFormSubmit (evt) {
    evt.preventDefault();
    const galleryCard = newCard(placeImport.value, placeLinkImport.value);
    galleryCards.prepend(galleryCard);
    popupAddForm.reset();
    closePopup(popupAdd);
}

function clickGallery (evt) {
    const galleryCard = evt.target.closest('.gallery__card');
    if (evt.target.classList[0] === 'gallery__card-btn') {
      evt.target.classList.toggle('gallery__card-btn_active');
    }

    if (evt.target.classList.value === 'gallery__card-btn-trash') {
      galleryCard.remove();
    }   

    if (evt.target.classList[0] === 'gallery__card-img') {      
      const galleryCardTitleText = galleryCard.querySelector('.gallery__card-title').textContent;
      popupViewImg.src = evt.target.src;
      popupViewImg.alt = galleryCardTitleText;
      popupViewTitle.textContent = galleryCardTitleText;
      openPopup(popupView);
    }
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
  popup.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup(evt.target.closest('.popup'));
    }
  })
})
