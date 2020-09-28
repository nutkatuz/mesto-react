import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  // Теперь нужно создать обработчик в App. Назовите его handleUpdateUser и задайте его в виде нового пропса onUpdateUser для компонента EditAvatarPopup. Внутри этого обработчика вызовите api.setUserInfo. После завершения запроса обновите стейт currentUser из полученных данных и закройте все модальные окна.

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialItems()])
      .then(([userInfo, cards]) => {
        setCurrentUser(userInfo);
        // setCards(cards)
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, [])

  function handleCardClick(card) {
    setSelectedCard({ ...card, isImgPopupOpen: true });
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups(card) {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ ...card, isImgPopupOpen: false });
  }

  function handleUpdateUser(name, about) {
    api
      .patchUserData(name, about)
      .then((newUser) => {
        setCurrentUser(newUser)
      })
      .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <div className="page__header-and-main-wrapper">
            <Header />
            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />
          </div>
          <Footer />
        </div>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
            <span className="popup__error" />
          </label>
          <button className="popup__button" type="submit"
            aria-label="Обновить фото пользователя">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          name='confirm'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input className="popup__input popup__input_place-name"
              name="name"
              defaultValue=""
              autoComplete="off"
              placeholder="Название"
              type="text"
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
              defaultValue=""
              placeholder="Ссылка на картинку"
              required />
            <span className="popup__error" />
          </label>
          <button className="popup__button"
            type="submit"
            disabled
            aria-label="Сохранить новую карточку">Создать
        </button>
        </PopupWithForm>

        <PopupWithForm name='new-card'
          title='Вы уверены?'>
          <button className="popup__button"
            type="submit"
            aria-label="Подтвердить удаление карточки">Да
        </button>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;