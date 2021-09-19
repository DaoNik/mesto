const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
}

const showInputError = (inputElement, errorElement, inputErrorClass) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (inputElement, errorElement, inputErrorClass) => {
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (!inputElement.validity.valid) {
        showInputError(inputElement, errorElement, inputErrorClass);
    } else {
        hideInputError(inputElement, errorElement, inputErrorClass);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    });
};

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}

const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
        enableSubmitButton(buttonElement, inactiveButtonClass);
    }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach(formElement => {
        setEventListeners(
            formElement,
            config.inputSelector,
            config.submitButtonSelector,
            config.inputErrorClass,
            config.inactiveButtonClass
        );
    });
};

enableValidation(configValidation);