export const editButton = document.querySelector('.profile__edit');
export const addButton = document.querySelector('.profile__add-card');
export const formElementEdit = document.querySelector('.edit-popup__form');
export const formElementAdd = document.querySelector('.add-popup__form');
export const userInf = {
  nameValueSelector: '.profile__name',
  jobValueSelector: '.profile__description',
};
export const nameInput = document.querySelector('.popup__content-form-input_type_name');
export const jobInput = document.querySelector('.popup__content-form-input_type_job');

export const initialCards = [
  {
    cardname: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    cardname: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    cardname: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    cardname: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    cardname: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    cardname: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const formElementList = {
  input: '.popup__content-form-input',
  submitButton: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__content-form-input_error',
  errorTextClass: 'popup__content-form-input-text-error',
};
