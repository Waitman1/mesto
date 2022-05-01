import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";


const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add-card');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const zoomPopup = document.querySelector('.zoom-picture');
const editCloseButton = document.querySelector('.edit-popup__close-button');
const addCloseButton = document.querySelector('.add-popup__close-button');
const zoomCloseButton = document.querySelector('.zoom-picture__close-button');
const formElementEdit = document.querySelector('.edit-popup__form');
const formElementAdd = document.querySelector('.add-popup__form'); 
const nameInput = document.querySelector('.popup__content-form-input_type_name');
const jobInput = document.querySelector('.popup__content-form-input_type_job');
const namePlaceInput = document.querySelector('.popup__content-form-input_type_name-place');
const urlPlaceInput = document.querySelector('.popup__content-form-input_type_url');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__description');
const initialCards = [
	{
	  name: 'Архыз',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
	  name: 'Челябинская область',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
	  name: 'Иваново',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
	  name: 'Камчатка',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
	  name: 'Холмогорский район',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
	  name: 'Байкал',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
 ]; 

 const elementsCardsContent = document.querySelector('.elements__cards');
const formElementList = {
  input: '.popup__content-form-input',
  submitButton: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__content-form-input_error',
  errorTextClass: 'popup__content-form-input-text-error'
}


const createNewCard = function creatNewCard (data) {
  const card = new Card (data.name, data.link, '#cards');
  const cardElement = card.generateCard();
  return cardElement;
}

const addNewCards = function(items) {
  const cardFromPopup = createNewCard (items);
  elementsCardsContent.prepend(cardFromPopup);
};

initialCards.forEach((item) => {
  const cardFromArray = createNewCard (item);
  elementsCardsContent.append (cardFromArray);
});


const closeWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupOnOverlayClick (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener ('keyup', closeWithEsc);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener ('keyup', closeWithEsc);
}

function editProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  editProfileValidate.toggleButtonState();
  openPopup(editPopup);
}

function editProfileForm(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup(editPopup);
}

const addCard = function (evt) {
  evt.preventDefault();
  const items = {};
  items.link = urlPlaceInput.value;
  items.name = namePlaceInput.value;
  addNewCards (items);
  closePopup(addPopup);
};

editCloseButton.addEventListener('click', function () {
  closePopup(editPopup);
});


addCloseButton.addEventListener('click', function () {
  closePopup(addPopup);
});
zoomCloseButton.addEventListener('click', function () {
  closePopup(zoomPopup);
});

editButton.addEventListener('click', () => {
  editProfile();
});

addButton.addEventListener('click', () => {
  formElementAdd.reset();
  addProfileValidate.toggleButtonState();
  openPopup (addPopup);
});

formElementEdit.addEventListener('submit', editProfileForm);
formElementAdd.addEventListener('submit', addCard);

addPopup.addEventListener('click', closePopupOnOverlayClick);
editPopup.addEventListener('click', closePopupOnOverlayClick);
zoomPopup.addEventListener('click', closePopupOnOverlayClick);

const editProfileValidate = new FormValidator (formElementList, formElementEdit);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (formElementList, formElementAdd);
addProfileValidate.enableValidation();