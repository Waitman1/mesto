import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor ({ callbackSubmit }, popupSelector) {
        super (popupSelector);
        this._callbackSubmit = callbackSubmit;

        this._formElement = this._popup.querySelector('.popup__content-form');
        this._inputList = this._formElement.querySelectorAll('.popup__content-form-input');
    } 

    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach (input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners () {
        this._formElement.addEventListener('submit', () => {
            this._callbackSubmit (this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._formElement.reset();
    }
} 