import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  /* openPopup,
  closePopup, */
  handleElementsFormSubmit,
  handleProfileFormSubmit,
  createCard,
} from "./utils.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";

const editOverlay = new Popup("#edit-overlay");
editOverlay.setEventListeners();

const editButton = document
  .querySelector(".profile__button-edit")
  .addEventListener("click", () => editOverlay.open());

const formElement = document
  .querySelector("#edit-form")
  .addEventListener("submit", handleProfileFormSubmit);

const cardOverlay = new Popup("#card-overlay");
cardOverlay.setEventListeners();

const addButton = document
  .querySelector(".profile__button-add")
  .addEventListener("click", () => cardOverlay.open());

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

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link);
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderer(initialCards);

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

export const imageOverlay = new PopupWithImage("#image-overlay");
imageOverlay.setEventListeners();
