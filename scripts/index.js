import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  handleElementsFormSubmit,
  handleProfileFormSubmit,
  createCard,
} from "./utils.js";

const editOverlay = document.querySelector("#edit-overlay");

const editButton = document
  .querySelector(".profile__button-edit")
  .addEventListener("click", () => openPopup(editOverlay));

const closeButton = document
  .querySelector(".overlay__button")
  .addEventListener("click", (evt) => closePopup(evt, editOverlay));

const popup = document
  .querySelector("#edit-overlay")
  .addEventListener("click", (evt) => closePopup(evt, editOverlay));

const formElement = document
  .querySelector("#edit-form")
  .addEventListener("submit", handleProfileFormSubmit);

const cardOverlay = document.querySelector("#card-overlay");

const addButton = document
  .querySelector(".profile__button-add")
  .addEventListener("click", () => openPopup(cardOverlay));

const closeCardButton = document
  .querySelector(".overlay__button")
  .addEventListener("click", (evt) => closePopup(evt, cardOverlay));

const popupCard = document
  .querySelector("#card-overlay")
  .addEventListener("click", (evt) => closePopup(evt, cardOverlay));

const formCardElement = document
  .querySelector("#card-form")
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
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const form = document.querySelector(".form");

const formValidation = new FormValidator(formObject, form);

formValidation.enableValidation();
