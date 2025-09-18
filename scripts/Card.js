export class Card {
  constructor(name, link, templateSelector, openPopupImage) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._popupImage = document.querySelector("#image-overlay");
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const templateCards = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__container")
      .cloneNode(true);

    return templateCards;
  }

  _handleTrashButtonClick() {
    this._element.remove();
  }

  _handleHeartButtonClick() {
    const heartButton = this._element.querySelector(".elements__button");
    heartButton.classList.toggle("elements__button_active");
  }

  /*  _openPopupImage() {
    const popupPhoto = this._popupImage.querySelector(".overlay__image");
    const popupImageTitle = this._popupImage.querySelector(".overlay__caption");
    this._popupImage.className = "overlay_opened";
    popupPhoto.src = this._cardImage.src;
    popupPhoto.alt = this._cardImage.alt;
    popupImageTitle.textContent = this._cardTitle.textContent;
  }

  _closePopupImage(evt) {
    if (
      evt.target.classList.contains("overlay_opened") ||
      evt.target.classList.contains("overlay__button") ||
      evt.target.classList.contains("overlay__button-image")
    ) {
      this._popupImage.className = "overlay";
    }
  }

  _closeEscapePopupImage(evt) {
    if (evt.key === "Escape") {
      this._popupImage.className = "overlay";
    }
  } */

  _setEventListeners() {
    const trashButton = this._element
      .querySelector(".elements__button-trash")
      .addEventListener("click", () => {
        this._handleTrashButtonClick();
      });
    const heartButton = this._element
      .querySelector(".elements__button")
      .addEventListener("click", () => {
        this._handleHeartButtonClick();
      });
    this._cardImage.addEventListener("click", () => {
      this._openPopupImage(this);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".elements__title");
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();

    return this._element;
  }
}
