import { Card } from "./Card.js";
import { imageOverlay } from "./index.js";

/* export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const profileName = document.querySelector(".profile__name");
  const inputName = document.querySelector("#name-input");
  const inputInfo = document.querySelector("#info-input");
  const profileInfo = document.querySelector(".profile__info");
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  const popup = document.querySelector("#edit-overlay");
  popup.className = "overlay";
} */

export function createCard(name, link) {
  const card = new Card(name, link, "#template-cards", () => {
    imageOverlay.open(link, name);
  });
  const cardElement = card.generateCard();

  return cardElement;
}

/* export function handleElementsFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: "",
    link: "",
  };

  const inputTitle = document.querySelector("#title-input");
  const inputLink = document.querySelector("#link-input");
  newCard.name = inputTitle.value;
  newCard.link = inputLink.value;

  const cardElement = createCard(newCard.name, newCard.link);

  const popupCard = document.querySelector("#card-overlay");
  popupCard.className = "overlay";
  const elements = document.querySelector(".elements");
  elements.prepend(cardElement);
} */
