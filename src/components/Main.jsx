import React, { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialItems()
      .then((cards) => {
        // setCurrentUser(userInfo);
        setCards(cards)
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked) //------- not running
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteItem(card._id)
      .then(() => {
        setCards(cards.filter((item) => item !== card));
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          onMouseUp={() => onEditAvatar()}
          className="profile__photobtn"
          type="button"
          aria-label="Обновить фото профиля"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <div className="profile__photobtn-overlay" />
        </button>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__job">{currentUser.about}</p>
        <button
          onMouseUp={() => onEditProfile()}
          className="profile__edit-button hover-style"
          type="button"
          aria-label="Редактировать данные профиля">
        </button>
        <button
          onMouseUp={() => onAddPlace()}
          className="profile__add-button hover-style"
          type="button"
          aria-label="Добавить карточку">
        </button>
      </section>
      <section className="gallery-cards">
        <ul className="gallery">
          {cards.map(card => (<Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main