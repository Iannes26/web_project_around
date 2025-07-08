export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._popupImage = document.querySelector(".popup-image");
  }

  _getTemplate() {
    const templateCards = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__container")
      .cloneNode(true);

    return templateCards;
  }

  _handleTrashButtonClick() {
    console.log(this._element);
    this._element.remove();
  }

  _handleHeartButtonClick() {
    const heartButton = this._element.querySelector(".elements__button");
    heartButton.classList.toggle("elements__button_active");
  }

  _openPopupImage() {
    const popupPhoto = this._popupImage.querySelector(".popup-image__photo");
    const popupImageTitle = this._popupImage.querySelector(
      ".popup-image__title"
    );
    this._popupImage.className = "popup-image_opened";
    popupPhoto.src = this._cardImage.src;
    popupPhoto.alt = this._cardImage.alt;
    popupImageTitle.textContent = this._cardTitle.textContent;
  }

  _closePopupImage(evt) {
    if (
      evt.target.classList.contains("popup-image_opened") ||
      evt.target.classList.contains("popup__button-close")
    ) {
      this._popupImage.className = "popup-image";
    }
  }

  _closeEscapePopupImage(evt) {
    if (evt.key === "Escape") {
      this._popupImage.className = "popup-image";
    }
  }

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
    const cardImage = this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._openPopupImage();
      });
    const popupImage = document
      .querySelector(".popup-image")
      .addEventListener("click", (evt) => {
        this._closePopupImage(evt);
      });
    document.addEventListener("keydown", (evt) => {
      this._closeEscapePopupImage(evt);
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
