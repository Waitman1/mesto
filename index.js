let editButton = document.querySelector('.profile__edit');
let addButton = document.querySelector('.profile__add-card');
let editPopup = document.querySelector('.edit__popup');
let addPopup = document.querySelector('.add__popup');
let zoomPopup = document.querySelector('.zoom-picture');
let editCloseButton = document.querySelector('.edit__close-button');
let addCloseButton = document.querySelector('.add__close-button');
let zoomCloseButton = document.querySelector('.photo__close-button');
let formElementEdit = document.querySelector('.edit__form');
let formElementAdd = document.querySelector('.add__form');
let nameInput = document.querySelector('.popup__container-form-input_type_name');
let jobInput = document.querySelector('.popup__container-form-input_type_job');
let namePlaceInput = document.querySelector('.popup__container-form-input_type_name-place');
let urlPlaceInput = document.querySelector('.popup__container-form-input_type_url');
let nameValue = document.querySelector('.profile__name');
let jobValue = document.querySelector('.profile__description');
let zoomPictureCard = document.querySelector('.zoom-picture__card');
let zoomPictureCardTitle = document.querySelector('.zoom-picture__card-title');


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

 let elementsCards = document.querySelector('.elements__cards');
 let cards = document.querySelector('#cards').content;


 function closePopup(popup) {
	popup.classList.remove('popup_opened');
 }

 function openPopup(popup) {
		popup.classList.add('popup_opened');
}


function openEditPopup(){
	nameInput.value = nameValue.textContent;
	jobInput.value = jobValue.textContent;
	openPopup(editPopup)
}

function formSubmitHandler (evt) {
	evt.preventDefault();
	nameValue.textContent = nameInput.value;
	jobValue.textContent = jobInput.value;
	closePopup(editPopup);
}


let createPlaceCard = function (items){
  let	elementsCard = cards.querySelector('.elements__card').cloneNode(true);
  let pictureCard = elementsCard.querySelector('.elements__card-img');
  pictureCard.src = items.link;
  pictureCard.alt = items.name;
  elementsCard.querySelector('.elements__card-title').textContent = items.name;
  
  elementsCard.querySelector('.elements__card-like').addEventListener ('click', likeCard);

  elementsCard.querySelector('.elements__card-delete').addEventListener ('click', function(){
   elementsCard.remove();
  });

  elementsCard.querySelector('.elements__card-zoom-button').addEventListener ('click', function(){
   zoomPictureCard.src = items.link;
	zoomPictureCard.alt = items.link;
	zoomPictureCardTitle.textContent = items.name;
	openPopup(zoomPopup);
  });

  return elementsCard;
};


let addCard = function (evt) {
	evt.preventDefault();
	let items = {};
	items.link = urlPlaceInput.value;
	items.name = namePlaceInput.value;
	addNewCards (items);
	closePopup(addPopup);
	formElementAdd.reset();
};

let likeCard = function(evt){
	evt.target.classList.toggle('elements__card-like-active');
};

let addNewCards = function(items){
	elementsCards.prepend(createPlaceCard(items));
};

let cardList = initialCards.map (function (items){
	return createPlaceCard(items);
}); 

elementsCards.append(...cardList);
editCloseButton.addEventListener('click', function() {
	closePopup(editPopup);
});


addCloseButton.addEventListener('click', function() {
	closePopup(addPopup);
});


zoomCloseButton.addEventListener('click', function() {
	closePopup(zoomPopup);
});

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', function(){
	openPopup(addPopup);
});
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);
