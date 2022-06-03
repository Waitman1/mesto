export class Card {
  constructor(
    { data, handleCardClick, deleteCardPopup, likeCards, disLikeCards },
    userId,
    cardSelector,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._deleteCardPopup = deleteCardPopup;
    this._likeCards = likeCards;
    this._disLikeCards = disLikeCards;
    this._userId = userId;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__card-image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__card-title').textContent = this._name;
    this._like = this._element.querySelector('.elements__card-like-button');
    this._likeCounter = this._element.querySelector('.elements__card-like-counter');
    this._likeCounter.textContent = this._likes.length;

    if (this._findLike()) {
      this._like.classList.add('elements__card-like-button-active');
    }

    this._deleteCardButton = this._element.querySelector('.elements__card-delete-button');
    if (this._userId === this._owner._id) {
      this._deleteCardButton.classList.add('elements__card-delete-button_visible');
    } else {
      this._deleteCardButton.classList.remove('elements__card-delete-button_visible');
    }
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._like = !this._like;
      if (!this._like) {
        this._likeCards(this._element, this._id, this._likeCounter);
      } else {
        this._disLikeCards(this._element, this._id, this._likeCounter);
      }
    });

    this._deleteCardButton.addEventListener('click', () => {
      this._deleteCardPopup(this._element, this._id);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _findLike() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        return true;
      }
    }
  }
}
