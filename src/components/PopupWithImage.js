import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.zoom-picture__card');
    this._imageName = this._popup.querySelector('.zoom-picture__card-title');
  }

  open(cardname, link) {
    this._image.src = link;
    this._image.alt = cardname;
    this._imageName.textContent = cardname;
    super.open();
  }
}
