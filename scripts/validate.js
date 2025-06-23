const formObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formObject.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formObject.inputErrorClass);
  errorElement.classList.remove(formObject.errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formObject.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll(formObject.inputSelector));
  const submitButton = form.querySelector(formObject.submitButtonSelector);

  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(form, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(formObject.formSelector)
  );

  formList.forEach((form) => {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form);
  });
};

enableValidation();
