export class FormValidator {
    constructor(config) {
        this._config = config;
    }

    _showInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    
    _hideInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = '';
    }
    
    
    _checkInputValidity = (formElement, inputElement, inputErrorClass) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorElement, inputErrorClass);
        } else {
            this._hideInputError(inputElement, errorElement, inputErrorClass);
        }
    };
    
    _hasInvalidInput = (inputList) => {
        return inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };
    
    _disableSubmitButton = (buttonElement, inactiveButtonClass) => {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
    
    _enableSubmitButton = (buttonElement, inactiveButtonClass) => {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
    
    _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement, inactiveButtonClass);
        } else {
            this._enableSubmitButton(buttonElement, inactiveButtonClass);
        }
    };

    _setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonElement = formElement.querySelector(submitButtonSelector);
        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, inputErrorClass);
                this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
            });
        });
    
        this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    };

    enableValidation() {
        const formList = document.querySelectorAll(this._config.formSelector);
        formList.forEach(formElement => {
            this._setEventListeners(
                formElement,
                this._config.inputSelector,
                this._config.submitButtonSelector,
                this._config.inputErrorClass,
                this._config.inactiveButtonClass
            );
        });
    };
}