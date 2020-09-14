import React from 'react';
import '../index.css';

function ImagePopup(props) {
  return (
    <section className="popup popup_zoom">
    <figure className="zoom">
      <button className="popup__close popup__close_figure hover-style" type="button"
        aria-label="Закрыть картинку"></button>
      <img className="zoom__image" src="#" alt="полноразмерная картинка" />
      <figcaption className="zoom__caption"></figcaption>
    </figure>
  </section>
  );
}

export default ImagePopup;