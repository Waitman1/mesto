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
const zoomPictureCard = document.querySelector('.zoom-picture__card');
const zoomPictureCardTitle = document.querySelector('.zoom-picture__card-title');


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

 const elementsCards = document.querySelector('.elements__cards');
 const cards = document.querySelector('#cards').content;
 const buttonAddSubmit = document.querySelector('.add-popup__submit');
 const buttonEditSubmit = document.querySelector('.edit-popup__submit');
 const formElementList = {
	 inactiveButtonClass: 'popup__submit_inactive'
 };

 const closeEsc = (evt) => {
	 if (evt.key === 'Escape') {
		const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
	 }
 }



 function closePopupOverlayClick (evt) {
	if (evt.target.classList.contains('popup_opened')){
		closePopup(evt.target);
	}
 }


 function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keyup', closeEsc);
 }

 function openPopup(popup) {
		popup.classList.add('popup_opened');
		document.addEventListener('keyup', closeEsc);
}


function openEditPopup(){
	nameInput.value = nameValue.textContent;
	jobInput.value = jobValue.textContent;
	activeButtonElement(buttonEditSubmit, formElementList);
	openPopup(editPopup)
}

function formSubmitHandler (evt) {
	evt.preventDefault();
	nameValue.textContent = nameInput.value;
	jobValue.textContent = jobInput.value;
	closePopup(editPopup);
}


const createPlaceCard = function (addNewCards){
	const	elementsCard = cards.querySelector('.elements__card').cloneNode(true);
	const pictureCard = elementsCard.querySelector('.elements__card-img');
  pictureCard.src = addNewCards.link;
  pictureCard.alt = addNewCards.name;

  elementsCard.querySelector('.elements__card-title').textContent = addNewCards.name;
  elementsCard.querySelector('.elements__card-like').addEventListener ('click', likeCard);
  elementsCard.querySelector('.elements__card-delete').addEventListener ('click', function(){
   elementsCard.remove();
  });

  pictureCard.addEventListener ('click', function(){
   zoomPictureCard.src = addNewCards.link;
	zoomPictureCard.alt = addNewCards.link;
	zoomPictureCardTitle.textContent = addNewCards.name;
	openPopup(zoomPopup);
  });

  return elementsCard;
};


const addCard = function (evt) {
	evt.preventDefault();
	addNewCards({ name: namePlaceInput.value, link: urlPlaceInput.value  }) 
	closePopup(addPopup);
	formElementAdd.reset();
};

const likeCard = function(evt){
	evt.target.classList.toggle('elements__card-like-active');
};

const addNewCards = function(items){
	elementsCards.prepend(createPlaceCard(items));
};

const cardList = initialCards.map (function (items){
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

editButton.addEventListener('click', () => {
	openEditPopup();
});

addButton.addEventListener('click', () =>{
	disableButtonElement( buttonAddSubmit, formElementList);
	openPopup(addPopup);
});

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);

addPopup.addEventListener('click', closePopupOverlayClick);
editPopup.addEventListener('click', closePopupOverlayClick);
zoomPopup.addEventListener('click', closePopupOverlayClick);

