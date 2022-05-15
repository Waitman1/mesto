export class Popup {
	constructor (popupSelector) {
		 this._popup = document.querySelector(popupSelector);;
	}

	open () {
		 this._popup.classList.add('popup_opened');
		 document.addEventListener ('keyup', this._handleEsc);
	}

	close() {
		 this._popup.classList.remove('popup_opened');
		 document.removeEventListener ('keyup', this._handleEsc);
	}

	_handleEsc = (evt) => {
		 if (evt.key === 'Escape') {
			const popupOpened = document.querySelector('.popup_opened');
			this.close(popupOpened);
		 }
	}

	setEventListeners () {
		 const closeButton = this._popup.querySelector('.popup__close')
		 closeButton.addEventListener('click', () => {
			  this.close();
		 });
		 this._popup.addEventListener('click', (evt) => {
			  if (evt.target.classList.contains('popup_opened')) {
					this.close(evt.target);
			  }
		 });
	}
}