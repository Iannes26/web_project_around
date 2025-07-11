import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  openPopup,
  openCardPopup,
  closePopup,
  closeCardPopup,
  handleElementsFormSubmit,
  handleProfileFormSubmit,
  createCard,
} from "./utils.js";

const editButton = document
  .querySelector(".profile__button-edit")
  .addEventListener("click", openPopup);

const closeButton = document
  .querySelector(".popup__button")
  .addEventListener("click", closePopup);

const popup = document
  .querySelector(".popup")
  .addEventListener("click", closePopup);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup");
    popup.className = "popup";
  }
});

const formElement = document
  .querySelector(".form")
  .addEventListener("submit", handleProfileFormSubmit);

const addButton = document
  .querySelector(".profile__button-add")
  .addEventListener("click", openCardPopup);

const closeCardButton = document
  .querySelector(".popup-card__button")
  .addEventListener("click", closeCardPopup);

const popupCard = document
  .querySelector(".popup-card")
  .addEventListener("click", closeCardPopup);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const popupCard = document.querySelector(".popup-card");
    popupCard.className = "popup-card";
  }
});

const formCardElement = document
  .querySelector(".form-card")
  .addEventListener("submit", handleElementsFormSubmit);

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach((item) => {
  const cardElement = createCard(item.name, item.link);
  const sectionCards = document.querySelector(".elements");

  sectionCards.prepend(cardElement);
});

const formObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formProfile = document.querySelector(".form");
const formCard = document.querySelector(".form-card");

const formProfileValidation = new FormValidator(formObject, formProfile);
const formCardValidation = new FormValidator(formObject, formCard);

formProfileValidation.enableValidation();
formCardValidation.enableValidation();
