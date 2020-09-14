import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    // передавайте их в Main с помощью новых пропсов onEditProfile, onAddPlace и onEditAvatar.

    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
    };
  }
  handleEditAvatarClick () {
      this.setState({ isEditAvatarPopupOpen: true })
      // document.querySelector('.popup_update-avatar').classList.add('popup_is-opened')
    }
     handleEditProfileClick(){
      this.setState({isEditProfilePopupOpen: true })
      // document.querySelector('.popup_profile-edit').classList.add('popup_is-opened')
    }
     handleAddPlaceClick(){
      this.setState({ isAddPlacePopupOpen: true })
      // document.querySelector('.popup_new-card').classList.add('popup_is-opened')
    }
  // переменные состояния, отвечающие за видимость трёх попапов:
  // let isEditProfilePopupOpen = false;
  // let isAddPlacePopupOpen = false;
  // let isEditAvatarPopupOpen = false;
  // const avatarButton = document.querySelector('.profile__photobtn')
  // const addButton = document.querySelector('.profile__add-button')
  // const editButton = document.querySelector('.profile__edit-button')
  // avatarButton.addEventListener('click', () => {
  //   isEditProfilePopupOpen = true;
  // });
  // addButton.addEventListener('click', () => {
  //   isAddPlacePopupOpen = true;
  // });
  // editButton.addEventListener('click', () => {
  //   isEditAvatarPopupOpen = true;
  // });


  render() {
    return (
      <div className="page">
        <div className="page__container">
          <div className="page__header-and-main-wrapper">
            <Header />
            <Main onEditAvatar={this.handleEditAvatarClick}
    onEditAvatar={this.handleEditProfileClick}
    onAddPlace={this.handleAddPlaceClick}/>
          </div>
          <Footer />
        </div>
        <ImagePopup />

        <PopupWithForm
          name='update-avatar'
          title='Обновить аватар'
          isOpen={this.isEditAvatarPopupOpen}
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
          isOpen={isEditProfilePopupOpen}>
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
          isOpen={this.isAddPlacePopupOpen}>
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
}
export default App;
// OnClick={}