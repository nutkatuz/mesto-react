import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__header-and-main-wrapper">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick} />
        </div>
        <Footer />
      </div>
      <ImagePopup />

      <PopupWithForm
        name='update-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            className="popup__input popup__input_update-avatar"
            name="thirdInp"
            defaultValue=""
            placeholder="Ссылка на фото"
            type="url" />
          <span className="popup__error"></span>
        </label>
        <button className="popup__button" type="submit"
          aria-label="Обновить фото пользователя">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name='profile-edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        >
        <label className="popup__label">
          <input className="popup__input popup__input_name" type="text"
            name="firstInp" defaultValue="null" placeholder="Имя"
            autoComplete="name" required minLength="2" maxLength="40" />
          <span className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input className="popup__input popup__input_about" type="text"
            name="secondInp" defaultValue="null" autoComplete="off"
            placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="popup__error"></span>
        </label>
        <button className="popup__button" type="submit"
          aria-label="Сохранить изменения">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name='confirm'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        >
        <label className="popup__label">
          <input className="popup__input popup__input_place-name" name="name" defaultValue=""
            autoComplete="off" placeholder="Название" type="text" minLength="1" maxLength="30" required />
          <span className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input className="popup__input popup__input_image_url" type="url"
            inputMode="url" name="link" defaultValue=""
            placeholder="Ссылка на картинку" required />
          <span className="popup__error"></span>
        </label>
        <button className="popup__button" type="submit" disabled
          aria-label="Сохранить новую карточку">Создать</button>
      </PopupWithForm>

      <PopupWithForm name='new-card' title='Вы уверены?'>
        <button className="popup__button" type="submit"
          aria-label="Подтвердить удаление карточки">Да</button></PopupWithForm>

    </div>
  );
}
export default App;