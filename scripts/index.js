const profile = document.querySelector(".profile");
const editButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector(".form__item-name");
const inputInfo = document.querySelector(".form__item-info");
const profileInfo = document.querySelector(".profile__info");
const formElement = document.querySelector(".form");
const formButton = document.querySelector(".form__button");

function openPopup() {
  popup.className = "popup_opened";
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popup.className = "popup";
}

closeButton.addEventListener("click", closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  popup.className = "popup";
}

formElement.addEventListener("submit", handleProfileFormSubmit);

const addButton = document.querySelector(".profile__button-add");
const popupCard = document.querySelector(".popup-card");
const closeCardButton = document.querySelector(".popup-card__button");
const inputTitle = document.querySelector(".form-card__item-title");
const inputLink = document.querySelector(".form-card__item-link");
const formCardElement = document.querySelector(".form-card");
const formCardButton = document.querySelector(".form-card__button");

function openCardPopup() {
  popupCard.className = "popup-card_opened";
}

addButton.addEventListener("click", openCardPopup);

function closeCardPopup() {
  popupCard.className = "popup-card";
}

closeCardButton.addEventListener("click", closeCardPopup);

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
