import React, { useEffect } from 'react';


function Popup({ onClose, onUpdateUser, onChange, name, title, isOpen, onSubmit, children }) {
  
  const handleEsc = (e) => {
    if (e.key !== 'Escape') return;
    onClose();
  };

  useEffect(() => {//применяем только при открытом окне
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc)
  }, [{isOpen}]);

  const handleClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <section 
      className={`popup ${isOpen ? 'popup_is-opened' : ''} popup_${name}`}
      onMouseDown={handleClose}>
      <form 
        className='popup__form'
        action='#'
        noValidate
        onSubmit={onSubmit}
      >
        <button
          className='popup__close hover-style'
          type='button'
          aria-label='Закрыть окно без сохранения'
          onClick={onClose} 
        />
        <fieldset className='popup__content'>
          <h3 className='popup__title'>{`${title}`}</h3>
          {children}
        </fieldset>
      </form>
    </section>
  )
}

export default Popup;

// import React from 'react';

// function PopupWithForm({ name, title, isOpen, onClose, onSubmit, children }) {
  
//     return (
//       <section className={`popup ${isOpen?'popup_is-opened':''} popup_${name}`}>
//         <form className='popup__form' 
//           action='#' 
//           noValidate
//           onSubmit={onSubmit}>
//           <button 
//             className='popup__close hover-style' 
//             type='button'
//             aria-label='Закрыть окно без сохранения' 
//             onClick={onClose} />
//           <fieldset className='popup__content'>
//             <h3 className='popup__title'>{`${title}`}</h3>
//             {children}
//           </fieldset>
//         </form>
//       </section>
//     )
// }

// export default PopupWithForm;