let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formEl = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameValue = document.querySelector('.profile__name');
let jobValue = document.querySelector('.profile__description');


function closePopup(){
	popup.classList.remove('popup_opened')
}


function openPopup(){
	popup.classList.add('popup_opened');
	nameInput.value = nameValue.textContent;
	jobInput.value = jobValue.textContent;
}



function formSubmit (evt) {
	evt.preventDefault();

	nameValue.textContent = nameInput.value;
	jobValue.textContent = jobInput.value;
	closePopup();
}

closeButton.addEventListener ('click', closePopup);
editButton.addEventListener ('click', openPopup);
formEl.addEventListener ('submit', formSubmit);