export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._popupImage = document.querySelector("#image-overlay");
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this);
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
