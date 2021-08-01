let openedButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closedButton = popup.querySelector('.popup__btn-closed');
let nameImport = popup.querySelector('.popup__input-text_value_name');
let profileTitle = document.querySelector('.profile__title');
let jobImport = popup.querySelector('.popup__input-text_value_job');
let profileSubtitle = document.querySelector('.profile__subtitle');
function openPopup () {
    popup.classList.add('popup_opened');
    nameImport.value = profileTitle.textContent;
    jobImport.value = profileSubtitle.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

openedButton.addEventListener('click', openPopup);
closedButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameImport.value;
    profileSubtitle.textContent = jobImport.value;
    closePopup();
}

popup.addEventListener('submit', formSubmitHandler);