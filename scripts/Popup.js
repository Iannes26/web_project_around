export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
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
    this._popupSelector.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("overlay") ||
        evt.target.classList.contains("overlay__button") ||
        evt.target.classList.contains("overlay__button-image")
      ) {
        this.close();
      }
    });
    this._handleEscClose();
  }
}
