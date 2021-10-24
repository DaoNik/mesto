export default class FormValidator {
    constructor({inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass}, form) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
        this._submitButton = this._form.querySelector(submitButtonSelector);
        this._inputErrorClass = inputErrorClass;
        this._inactiveButtonClass = inactiveButtonClass;
    }

    _showInputError = (inputElement, errorElement) => {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    
    _hideInputError = (inputElement, errorElement) => {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }
    
    _checkInputValidity = (inputElement) => {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorElement);
        } else {
            this._hideInputError(inputElement, errorElement);
        }
    };
    
    _hasInvalidInput = () => {
        return this._inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };
    
    disableSubmitButton = () => {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute('disabled', true);
    }
    
    _enableSubmitButton = () => {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute('disabled');
    }
    
    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this.disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };

    _setEventListeners = () => {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    
        this._toggleButtonState();
    };

    enableValidation() {
        this._setEventListeners();
    };
}