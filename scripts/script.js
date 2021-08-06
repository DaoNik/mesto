let openedButtonEdit = document.querySelector('.profile__button-edit');
let openedButtonAdd = document.querySelector('.profile__button-add');
const popup = document.querySelector('popup');
let popupEdit = document.querySelector('.popup_edit');
let popupAdd = document.querySelector('.popup_add');
let popupForm = document.querySelector('.popup__form');
let closedButton = document.querySelector('.popup__btn-closed');
let nameImport = document.querySelector('.popup__input-text_value_name');
let profileTitle = document.querySelector('.profile__title');
let jobImport = document.querySelector('.popup__input-text_value_job');
let profileSubtitle = document.querySelector('.profile__subtitle');
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
    galleryCardTitle.alt = nameCard;
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

function closePopup (evt) {
    const popup = evt.target.parentElement.parentElement;
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameImport.value;
    profileSubtitle.textContent = jobImport.value;
    closePopup();
}

openedButtonEdit.addEventListener('click', openPopupEdit);
openedButtonAdd.addEventListener('click', openPopupAdd);
closedButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
