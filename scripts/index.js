let profile = document.querySelector(".profile");
let editButton = document.querySelector(".profile__button-edit");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__button");
let profileName = document.querySelector(".profile__name");
let inputName = document.querySelector(".form__item-name");
let inputInfo = document.querySelector(".form__item-info");
let profileInfo = document.querySelector(".profile__info");
let formElement = document.querySelector(".form");
let formButton = document.querySelector(".form__button");

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
