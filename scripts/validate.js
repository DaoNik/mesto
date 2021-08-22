const labelName = document.querySelector('.popup__label_value_name');
const labelJob = document.querySelector('.popup__label_value_job');
const labelPlace = document.querySelector('.popup__label_value_place');
const labelPlaceLink = document.querySelector('.popup__label_value_place-link');
const popupForms = document.querySelectorAll('.popup__form');

function displayValidityMessage (form) {
    if (form === popupAddForm) {
        labelPlace.textContent = placeImport.validationMessage;
        labelPlaceLink.textContent = placeLinkImport.validationMessage;
    } else if (form === popupEditForm) {
       labelName.textContent = nameImport.validationMessage; 
       labelJob.textContent = jobImport.validationMessage;
    }
}

popupForms.forEach(form => {
    form.addEventListener('input', () => {
        checkValidForm(form);
    })
})

function checkValidForm (form)  {
    const popupButtonSave = form.querySelector('.popup__btn');
    if (form.checkValidity()) {
        popupButtonSave.removeAttribute('disabled');
        displayValidityMessage(form);
    } else {
        popupButtonSave.setAttribute('disabled', true);
        displayValidityMessage(form);
    }
}
