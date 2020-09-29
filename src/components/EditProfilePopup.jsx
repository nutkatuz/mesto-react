import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser} ) { //, isLoading isLoading={isLoading}
  const currentUser = React.useContext(CurrentUserContext);  // Подписка на контекст
  // Внутри EditProfilePopup добавьте стейт-переменные name и description и привяжите их к полям ввода, сделав их управляемыми. Не забудьте про обработчики onChange.
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');  
  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChange(e) {
    e.target.name === 'firstInp'
      ? setName(e.target.value)  //   setValue(e.target.value);
      : setDescription(e.target.value);
  }
  function handleSubmit(e) {    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();      // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='profile-edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input className="popup__input popup__input_name"
          type="text"
          name="firstInp"
          value={name || ''}
          placeholder="Имя"
          autoComplete="name"
          required
          minLength='2'
          maxLength="40"
          onChange={handleChange}
        />
        <span className="popup__error" />
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_about"
          type='text'
          name='secondInp'
          value={description || ''}
          autoComplete="off"
          placeholder="О себе"
          required
          minLength='2'
          maxLength='200'
          onChange={handleChange}
        />
        <span className="popup__error" />
      </label>
      <button className="popup__button"
        type="submit"
        aria-label="Сохранить изменения">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;