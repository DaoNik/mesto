/*const popupEdit = document.querySelector('.popup_edit');
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
const galleryCards = document.querySelector('.gallery__cards'); */
const labelName = document.querySelector('.popup__label_value_name');
const labelJob = document.querySelector('.popup__label_value_job');
const popupButton = popupEditForm.querySelector('.popup__btn');


nameImport.addEventListener('input', () => {
    if (nameImport.validity.valid) {
        labelName.textContent = '';
    }
    nameImport.checkValidity();
    checkValidForm(popupEditForm);
});

nameImport.addEventListener('invalid', () => {
    labelName.textContent = nameImport.validationMessage;
})

jobImport.addEventListener('input', () => {
    if (jobImport.validity.valid) {
        labelJob.textContent = '';
    }
    jobImport.checkValidity();
    console.log(jobImport.checkValidity());
    checkValidForm(popupEditForm);
});

jobImport.addEventListener('invalid', () => {
    labelJob.textContent = jobImport.validationMessage;
})

function checkValidForm (form)  {
    const popupButtonSave = form.querySelector('.popup__btn');
    if (form.checkValidity()) {
        popupButtonSave.removeAttribute('disabled');
    } else {
        popupButtonSave.setAttribute('disabled', true);
    }
}
