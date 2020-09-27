import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`card__recycle-bin hover-style ${isOwn ? '' : 'card__recycle-bin_hidden'}`);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like hover-style ${isLiked && 'card__like_active'}`;

  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card" onMouseUp={handleClick}>
      <img className="card__image" alt={`${card.name}`} src={`${card.link}`} />
      <button className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить" />
      <h3 className="card__title">{`${card.name}`}</h3>
      <button className={cardLikeButtonClassName}
        type="button"
        aria-label="Лайкнуть" />
      <p className="card__like-count">{`${card.likes.length}`}</p>
    </li>
  );
}

export default Card;