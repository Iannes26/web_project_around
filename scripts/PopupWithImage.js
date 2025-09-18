import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector("#image-overlay");
    this._popupPhoto = this._popupImage.querySelector(".overlay__image");
    this._popupImageTitle = this._popupImage.querySelector(".overlay__caption");
  }

  open(src, alt) {
    super.open();
    this._popupPhoto.src = src;
    this._popupPhoto.alt = alt;
    this._popupImageTitle.textContent = alt;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
