import React, { useState, useEffect } from 'react';
import '../index.css';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
    // onCardClick(card.isOpen);
  }
  return (
    <li className="card" onMouseUp={handleClick}>
      <img className="card__image" alt={`${card.name}`} src={`${card.link}`} />
      <button className="card__recycle-bin hover-style"
        type="button" aria-label="Удалить"></button>
      <h3 className="card__title">{`${card.name}`}</h3>
      <button className="card__like hover-style"
        type="button" aria-label="Лайкнуть"></button>
      <p className="card__like-count">{`${card.likes.length}`}</p>
    </li>
  );
}

export default Card;