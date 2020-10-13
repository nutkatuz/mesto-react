import React from 'react';
// import Popup from './Popup';

function ImagePopup({ card, onClose, isOpen }) { //selected card, onClose
  function handleClick() {
    onClose(card);
  }
  return (
    <section className={`popup popup_zoom ${card.isImgPopupOpen ? 'popup_is-opened' : ''}`}>
      <figure className='zoom'>
        <button className='popup__close popup__close_figure hover-style' type='button'
          aria-label='Закрыть картинку' onClick={handleClick} />
        <img className='zoom__image' src={`${card.link}`} alt={`${card.name}`} />
        <figcaption className='zoom__caption'>{`${card.name}`}</figcaption>
      </figure>
    </section>
  );
  // return (
  //   <Popup
  //   name='popup_zoom'
  //   isOpen={isOpen}
  //   onClose={onClose}
  //   >
  //     <figure className='zoom'>
  //       <button className='popup__close popup__close_figure hover-style'
  //         type='button' aria-label='Закрыть картинку' onClick={handleClick} />
  //       <img className='zoom__image' src={card.link} alt={card.name} />
  //       <figcaption className='zoom__caption'>{card.name}</figcaption>
  //     </figure>
  //   </Popup>
  // );
}

export default ImagePopup;