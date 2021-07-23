let openedButton = document.querySelector('.profile__button-edit');
let editForm = document.querySelector('.edit-form');
let closedButton = document.querySelector('.edit-form__btn-closed');
console.log(openedButton, editForm, closedButton);
openedButton.addEventListener('click', function () {
    editForm.classList.add('edit-form_opened');
})
closedButton.addEventListener('click', function() {
    editForm.classList.remove('edit-form_opened');
})