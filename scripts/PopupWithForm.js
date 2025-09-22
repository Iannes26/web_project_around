import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".form");
    this._formButton = this._form.querySelector(".form__button");
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll(".form__item");
    const formValues = {};
    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      const formValue = this._getInputValues();
      this._handleFormSubmit(evt, formValue);
      this.close();
    });
  }
}
