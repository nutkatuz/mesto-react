import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ 
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardClick, 
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <button
          onMouseUp={() => onEditAvatar()}
          className='profile__photobtn'
          type='button'
          aria-label='Обновить фото профиля'
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <div className='profile__photobtn-overlay' />
        </button>
        <h1 className='profile__name'>{currentUser.name}</h1>
        <p className='profile__job'>{currentUser.about}</p>
        <button
          onMouseUp={() => onEditProfile()}
          className='profile__edit-button hover-style'
          type='button'
          aria-label='Редактировать данные профиля'>
        </button>
        <button
          onMouseUp={() => onAddPlace()}
          className='profile__add-button hover-style'
          type='button'
          aria-label='Добавить карточку'>
        </button>
      </section>
      <section className='gallery-cards'>
        <ul className='gallery'>
          {cards.map(card => (<Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main