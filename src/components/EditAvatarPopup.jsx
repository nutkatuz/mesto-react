import React from 'react';
import Popup from './Popup';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value /* Значение инпута, полученное с помощью рефа */
    });
  }

  return (
    <Popup
      name='update-avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <input
          ref={inputRef}
          className='popup__input popup__input_update-avatar'
          name='thirdInp'
          defaultValue=''
          placeholder='Ссылка на фото'
          type='url' />
        <span className='popup__error' />
      </label>
      <button className='popup__button' 
        type='submit'
        aria-label='Обновить фото пользователя'
        value=''
      >
        Сохранить</button>
    </Popup>
  )
}

export default EditAvatarPopup;