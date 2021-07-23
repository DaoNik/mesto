let openedButton = document.querySelector('.profile__button-edit');
let editForm = document.querySelector('.edit-form');
let closedButton = editForm.querySelector('.edit-form__btn-closed');
openedButton.addEventListener('click', function () {
    editForm.classList.add('edit-form_opened');
})
closedButton.addEventListener('click', function() {
    editForm.classList.remove('edit-form_opened');
})

let saveButton = editForm.querySelector('.edit-form__btn');
let nameImport = editForm.querySelector('.edit-form__input-text_value_name');
let profileTitle = document.querySelector('.profile__title');
let jobImport = editForm.querySelector('.edit-form__input-text_value_job');
let profileSubtitle = document.querySelector('.profile__subtitle');
editForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameImport.value;
    profileSubtitle.textContent = jobImport.value;
    editForm.classList.remove('edit-form_opened');
})