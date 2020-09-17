import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card" onMouseUp={handleClick}>
      <img className="card__image" alt={`${card.name}`} src={`${card.link}`} />
      <button className="card__recycle-bin hover-style"
        type="button" aria-label="Удалить" />
      <h3 className="card__title">{`${card.name}`}</h3>
      <button className="card__like hover-style"
        type="button" aria-label="Лайкнуть" />
      <p className="card__like-count">{`${card.likes.length}`}</p>
    </li>
  );
}

export default Card;