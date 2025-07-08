import { Card } from "./Card.js";

export function openPopup() {
  const popup = document.querySelector(".popup");
  const inputName = document.querySelector(".form__item-name");
  const inputInfo = document.querySelector(".form__item-info");
  const profileName = document.querySelector(".profile__name");
  const profileInfo = document.querySelector(".profile__info");
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

export function closePopup(evt) {
  if (
    evt.target.classList.contains("popup_opened") ||
    evt.target.classList.contains("popup__button-close")
  ) {
    const popup = document.querySelector(".popup");
    popup.className = "popup";
  }
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const profileName = document.querySelector(".profile__name");
  const inputName = document.querySelector(".form__item-name");
  const inputInfo = document.querySelector(".form__item-info");
  const profileInfo = document.querySelector(".profile__info");
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  const popup = document.querySelector(".popup");
  popup.className = "popup";
}

export function openCardPopup() {
  const popupCard = document.querySelector(".popup-card");
  popupCard.classList.add("popup-card_opened");
}

export function closeCardPopup(evt) {
  if (
    evt.target.classList.contains("popup-card_opened") ||
    evt.target.classList.contains("popup__button-close")
  ) {
    const popupCard = document.querySelector(".popup-card");
    popupCard.className = "popup-card";
  }
}

export function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: "",
    link: "",
  };

  const inputTitle = document.querySelector(".form-card__item-title");
  const inputLink = document.querySelector(".form-card__item-link");
  newCard.name = inputTitle.value;
  newCard.link = inputLink.value;

  const card = new Card(newCard.name, newCard.link, "#template-cards");
  const cardElement = card.generateCard();

  const popupCard = document.querySelector(".popup-card");
  popupCard.className = "popup-card";
  const elements = document.querySelector(".elements");
  elements.prepend(cardElement);
}
