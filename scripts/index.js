import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { initialCards, formObject } from "./utils.js";

const profileInfos = new UserInfo({
  nameSelector: ".profile__name",
  infoSelector: ".profile__info",
});

const editOverlay = new Popup("#edit-overlay");
editOverlay.setEventListeners();

const editButton = document
  .querySelector(".profile__button-edit")
  .addEventListener("click", () => {
    editOverlay.open();
    const userInfos = profileInfos.getUserInfo();
    const nameInput = document.querySelector("#name-input");
    const infoInput = document.querySelector("#info-input");
    nameInput.value = userInfos.userName;
    infoInput.value = userInfos.info;
  });

const editForm = new PopupWithForm(
  {
    handleFormSubmit: (evt, formValue) => {
      evt.preventDefault();
      profileInfos.setUserInfo(formValue.personName, formValue.info);

      /* const profileName = document.querySelector(".profile__name");
      const profileInfo = document.querySelector(".profile__info");
      profileName.textContent = formValue.personName;
      profileInfo.textContent = formValue.info; */
    },
  },
  "#edit-overlay"
);
editForm.setEventListeners();

const cardOverlay = new Popup("#card-overlay");
cardOverlay.setEventListeners();

const addButton = document
  .querySelector(".profile__button-add")
  .addEventListener("click", () => cardOverlay.open());

const cardForm = new PopupWithForm(
  {
    handleFormSubmit: (evt, formValue) => {
      evt.preventDefault();
      const newCard = {
        name: "",
        link: "",
      };

      newCard.name = formValue.title;
      newCard.link = formValue.link;

      const cardElement = createCard(newCard.name, newCard.link);
      const elements = document.querySelector(".elements");
      elements.prepend(cardElement);
    },
  },
  "#card-overlay"
);
cardForm.setEventListeners();

function createCard(name, link) {
  const card = new Card(name, link, "#template-cards", () => {
    imageOverlay.open(link, name);
  });
  const cardElement = card.generateCard();

  return cardElement;
}

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

const form = document.querySelector(".form");

const formValidation = new FormValidator(formObject, form);

formValidation.enableValidation();

export const imageOverlay = new PopupWithImage("#image-overlay");
imageOverlay.setEventListeners();
