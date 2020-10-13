import React, { useState } from 'react';
import Popup from './Popup';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  
  const [form, setForm] = useState({
    name: '',
    link: ''
  });

  function handleChange(e) {  // Обработчик изменения инпута обновляет стейт
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({    // ( {...values, { [name]: value }} )
      ...form,
      [input.name]: input.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(form);    // console.log(form.name, form.link);
  }

  return (
    <Popup
      name='confirm'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <input className='popup__input popup__input_place-name'
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          autoComplete='off'
          placeholder='Название'
          minLength='1'
          maxLength='30'
          required />
        <span className='popup__error' />
      </label>
      <label className='popup__label'>
        <input className='popup__input popup__input_image_url'
          type='url'
          inputMode='url'
          name='link'
          value={form.link}
          onChange={handleChange}
          placeholder='Ссылка на картинку'
          required />
        <span className='popup__error' />
      </label>
      <button className='popup__button'
        type='submit'
        aria-label='Сохранить новую карточку'>Создать
      </button>
    </Popup>
  )
}

export default AddPlacePopup;