import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import '../index.css';
import { api } from '../utils/api';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialItems()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cards)
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button onMouseUp={() => onEditAvatar()} className="profile__photobtn" type="button"
          aria-label="Обновить фото профиля" style={{ backgroundImage: `url(${userAvatar})` }}>
          <div className="profile__photobtn-overlay"></div>
        </button>
        <h1 className="profile__name">{`${userName}`}</h1>
        <p className="profile__job">{`${userDescription}`}</p>
        <button onMouseUp={() => onEditProfile()} className="profile__edit-button hover-style" type="button"
          aria-label="Редактировать данные профиля"></button>
        <button onMouseUp={() => onAddPlace()} className="profile__add-button hover-style"
          type="button" aria-label="Добавить карточку"></button>
      </section>
      <section className="gallery">

        <ul className="card-template">
            {cards.map(item => (
          <li className="card">
            <img className="card__image" alt={`${item.name}`} src={`${item.link}`} />
            <button className="card__recycle-bin hover-style"
              type="button" aria-label="Удалить"></button>
            <h3 className="card__title"></h3>
            <button className="card__like hover-style"
              type="button" aria-label="Лайкнуть"></button>
            <p className="card__like-count">{`${item.likes.length}`}</p>
          </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

// используйте её внутри JSX-итерации по массиву cards. Используйте подстановку данных элемента массива в JSX, чтобы вывести название карточки, количество лайков и указать URL изображения (как и прежде с помощью атрибута style).
