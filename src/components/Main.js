import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
          <div className="profile__photobtn-overlay">
          </div>
        </button>
        <h1 className="profile__name">{`${userName}`}</h1>
        <p className="profile__job">{`${userDescription}`}</p>
        <button onMouseUp={() => onEditProfile()} className="profile__edit-button hover-style" type="button"
          aria-label="Редактировать данные профиля">
        </button>
        <button onMouseUp={() => onAddPlace()} className="profile__add-button hover-style"
          type="button" aria-label="Добавить карточку">
        </button>
      </section>
      <section className="gallery-cards">
        <ul className="gallery">
          {cards.map(card => (<Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;