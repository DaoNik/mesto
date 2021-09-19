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
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const profileTitle = document.querySelector('.profile__title');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const profileSubtitle = document.querySelector('.profile__subtitle');
const placeInput = popupAdd.querySelector('.popup__input_value_place');
const placeLinkInput = popupAdd.querySelector('.popup__input_value_place-link');
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
    const galleryCardTrash = galleryCard.querySelector('.gallery__card-btn-trash'); 
    const galleryCardLike = galleryCard.querySelector('.gallery__card-btn');
    galleryCardTitle.textContent = nameCard;
    galleryCardImg.src = imgCard;
    galleryCardImg.alt = nameCard;
    galleryCardImg.addEventListener('click', () => {
      popupViewImg.src = imgCard;
      popupViewImg.alt = nameCard;
      popupViewTitle.textContent = nameCard;
      openPopup(popupView);
    })
    galleryCardTrash.addEventListener('click', () => {
      galleryCard.remove();
    });
    galleryCardLike.addEventListener('click', () => {
      galleryCardLike.classList.toggle('gallery__card-btn_active');
    })
    return galleryCard;
}

initialCards.forEach((initialCard) => {
  const galleryCard = newCard(initialCard.name, initialCard.link);
  galleryCards.append(galleryCard);
})



const closePopupPressEsc = (evt) => {
  if (evt.key === 'Escape') {
    popups.forEach(popup => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
        document.removeEventListener('keydown', closePopupPressEsc);
      }
    })
  }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupPressEsc);
}

function openPopupEdit() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    const submitButton = popupEditForm.querySelector('.popup__btn');
    enableSubmitButton(submitButton, configValidation.inactiveButtonClass);
    openPopup(popupEdit);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const galleryCard = newCard(placeInput.value, placeLinkInput.value);
    galleryCards.prepend(galleryCard);
    popupAddForm.reset();
    const submitButton = popupAddForm.querySelector('.popup__btn');
    disableSubmitButton(submitButton, configValidation.inactiveButtonClass);
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
