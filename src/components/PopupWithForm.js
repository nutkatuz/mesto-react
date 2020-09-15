import React from 'react';
import '../index.css';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    };
  
  render() {
  // props.name  title children
    return (
      <section className={`popup ${this.props.isOpen?'popup_is-opened':''} popup_${this.props.name}`}>
        <form className="popup__form" name={`${this.props.name}`} action="#" noValidate>
          <button className='popup__close hover-style' type="button"
            aria-label="Закрыть окно без сохранения" onClick={this.props.onClose}></button>
          <fieldset className="popup__content">
            <h3 className="popup__title">{`${this.props.title}`}</h3>
            {this.props.children}
          </fieldset>
        </form>
      </section>
    );
  }
}
export default PopupWithForm;