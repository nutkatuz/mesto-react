import React from 'react';
// import logo from '../images/logo.svg';
import '../index.css';
class Main extends React.Component {
  constructor(props) {
    super(props);  

  }
  render() {
  return (
    <main className="content">
        <section className="profile">
          <button onMouseUp={()=>this.state.onEditAvatar} className="profile__photobtn" type="button" 
          aria-label="Обновить фото профиля">
            <div className="profile__photobtn-overlay"></div>
          </button>
          <h1 className="profile__name"></h1>
          <p className="profile__job"></p>
          <button onMouseUp={()=>this.state.onEditProfile} className="profile__edit-button hover-style" type="button"
            aria-label="Редактировать данные профиля"></button>
          <button onMouseUp={()=>this.state.onAddPlace} className="profile__add-button hover-style" 
          type="button" aria-label="Добавить карточку"></button>
        </section>
        <section className="gallery">
          <template className="card-template">
            <article className="card">
              <img className="card__image" src='#' alt=''/>
              <button className="card__recycle-bin hover-style" 
              type="button" aria-label="Удалить"></button>
              <h3 className="card__title"></h3>
              <button className="card__like hover-style" 
              type="button" aria-label="Лайкнуть"></button>
              <p className="card__like-count"></p>
            </article>
          </template>
        </section>
    </main>
  );
}
  }

export default Main;