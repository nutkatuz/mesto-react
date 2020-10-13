import React, { useState, useEffect } from 'react';
import Popup from './Popup';

function EditProfilePopup({ isOpen, onClose, onUpdateUser} ) {

  const [form, setForm] = useState({
    name: '',
    about: ''
  });

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({
      ...form,
      [input.name]: input.value
    });
  }

  function handleSubmit(e) {// автоподстановка из АПИ в main, не из формы
    e.preventDefault();
    onUpdateUser(form);
  }

  return (
    <Popup
      name='profile-edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <input className='popup__input popup__input_name'
          type='text'
          name='name'
          value={form.name}
          placeholder='Имя'
          autoComplete='name'
          required
          minLength='2'
          maxLength='40'
          onChange={handleChange}
        />
        <span className='popup__error' />
      </label>
      <label className='popup__label'>
        <input
          className='popup__input popup__input_about'
          type='text'
          name='about'
          value={form.about}
          autoComplete='off'
          placeholder='О себе'
          required
          minLength='2'
          maxLength='200'
          onChange={handleChange}
        />
        <span className='popup__error' />
      </label>
      <button className='popup__button'
        type='submit'
        aria-label='Сохранить изменения'>Сохранить</button>
    </Popup>
  )
}

export default EditProfilePopup;