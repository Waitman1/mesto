import { openPopup} from './index.js'

export class Card {
	constructor (name, link, cardSelector) {
		this._name = name;
		this._link = link;
		this._cardSelector = cardSelector;
	}

 _getTemplate() {
	 const cardElement = document
	 .querySelector (this._cardSelector)
	 .content 
	 .querySelector('.elements__card')
	 .cloneNode(true);
	 return cardElement;
 }

  generateCard() {
	this._element = this._getTemplate();
	this._cardImage = this._element.querySelector('.elements__card-img');
	this._cardImage.src = this._link;
	this._cardImage.alt = this._name;
	this._element.querySelector('.elements__card-title').textContent = this._name;
	this._like = this._element.querySelector('.elements__card-like');
	this._setEventListener();
	return this._element;
 }

 _setEventListener(){
	 this._like.addEventListener('click', () => {
		 this._likeCard();
	 });

this._element.querySelector('.elements__card-delete').addEventListener ('click', () => {
	this._deleteCard();
});

this._cardImage.addEventListener ('click', () => {
	this._zoomPopup();
});
}

_likeCard() {
	this._like.classList.toggle('elements__card-like-active')
}


_deleteCard() {
this._element.remove();
this._element = null;
}

_zoomPopup () {
document.querySelector('.zoom-picture__card').src= this._link;
document.querySelector('.zoom-picture__card').alt =  this._name;
document.querySelector('.zoom-picture__card-title').textContent = this._name;
openPopup (document.querySelector('.zoom-picture'));
 }
}


