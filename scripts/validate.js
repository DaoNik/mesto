const labelName = document.querySelector('.popup__label_value_name');
const labelJob = document.querySelector('.popup__label_value_job');
const labelPlace = document.querySelector('.popup__label_value_place');
labelPlace.textContent = placeImport.validationMessage;
const labelPlaceLink = document.querySelector('.popup__label_value_place-link');
labelPlaceLink.textContent = placeLinkImport.validationMessage;
nameImport.addEventListener('input', () => {
    if (nameImport.checkValidity()) {
        labelName.textContent = '';
    } else {
        labelName.textContent = nameImport.validationMessage;
    }
    checkValidForm(popupEditForm);
});

jobImport.addEventListener('input', () => {
    if (jobImport.checkValidity()) {
        labelJob.textContent = '';
    } else {
        labelJob.textContent = jobImport.validationMessage;
    }
    checkValidForm(popupEditForm);
});

placeImport.addEventListener('input', () => {
    if (placeImport.checkValidity()) {
        labelPlace.textContent = '';
    } else {
        labelPlace.textContent = placeImport.validationMessage;
    }
    checkValidForm(popupAddForm);
});

placeLinkImport.addEventListener('input', () => {
    if (placeLinkImport.checkValidity()) {
        labelPlaceLink.textContent = '';
    } else {
        labelPlaceLink.textContent = placeLinkImport.validationMessage;
    }
    checkValidForm(popupAddForm);
});

function checkValidForm (form)  {
    const popupButtonSave = form.querySelector('.popup__btn');
    if (form.checkValidity()) {
        popupButtonSave.removeAttribute('disabled');
    } else {
        popupButtonSave.setAttribute('disabled', true);
    }
}
