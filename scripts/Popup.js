export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = document.querySelector(".overlay__button");
    this._closeButtonImage = document.querySelector(".overlay__button-image");
  }

  open() {
    this._popupSelector.classList.add("overlay_opened");
  }

  close() {
    this._popupSelector.className = "overlay";
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Esc") {
        this._popupSelector.className = "overlay";
      }
    });
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", () => this.close());
    this._closeButton.addEventListener("click", () => this.close());
    this._closeButtonImage.addEventListener("click", () => this.close());
    this._handleEscClose();
  }
}
