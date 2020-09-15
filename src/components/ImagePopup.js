import React from 'react';
import '../index.css';

function ImagePopup({card, onClose}) { //selectedCard, onClose
  return (
    <section className={` popup popup_zoom ${card?'popup_is-opened':''}` }>
    {/* <section className={` popup popup_zoom ${card.isOpen?'popup_is-opened':''}` }> */}
    <figure className="zoom">
      <button className="popup__close popup__close_figure hover-style" type="button"
        aria-label="Закрыть картинку" onClick={onClose}></button>
      <img className="zoom__image" src={`${card.link}`}  alt={`${card.name}`} />
      <figcaption className="zoom__caption">{`${card.name}`}</figcaption>
    </figure>
  </section>
  );
}

export default ImagePopup;