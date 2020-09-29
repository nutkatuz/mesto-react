import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // Стейт, в котором содержится значение инпута
  const [name, setName] = useState('');
  const [link, setLink] = useState('');


  function handleChange(e) {  // Обработчик изменения инпута обновляет стейт
    e.target.name === 'name'
      ? setName(e.target.value)
      : setLink(e.target.value) /* управляемые компоненты */
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm
      name='confirm'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input className="popup__input popup__input_place-name"
          type="text"
          name="name"
          value={name || ''} // Значение элемента «привязывается» к значению стейта
          onChange={handleChange}
          autoComplete="off"
          placeholder="Название"
          minLength="1"
          maxLength="30"
          required />
        <span className="popup__error" />
      </label>
      <label className="popup__label">
        <input className="popup__input popup__input_image_url"
          type="url"
          inputMode="url"
          name="link"
          value={link || ''}
          onChange={handleChange}
          placeholder="Ссылка на картинку"
          required />
        <span className="popup__error" />
      </label>
      <button className="popup__button"
        type="submit"
        aria-label="Сохранить новую карточку">Создать
      </button>
    </PopupWithForm>
  )
}

export default AddPlacePopup