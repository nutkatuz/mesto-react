import React from 'react';
import '../index.css';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    };
  
  render() {
  // props.name  title children
  return (
    <section className={`popup popup_${this.state.name} isOpen ? 'popup_is-opened' : ''`}>
      <form className="popup__form" name={`${this.state.name}`} action="#" noValidate>
        <button className="popup__close hover-style" type="button"
          aria-label="Закрыть окно без сохранения"></button>
        <fieldset className="popup__content">
          <h3 className="popup__title">{`${this.state.title}`}</h3>
          {this.state.children}
        </fieldset>
      </form>
    </section>
  );
}
}
export default PopupWithForm;