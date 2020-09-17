import React from 'react';

class PopupWithForm extends React.Component {
  render() {
    return (
      <section className={`popup ${this.props.isOpen?'popup_is-opened':''} popup_${this.props.name}`}>
        <form className="popup__form" name={`${this.props.name}`} action="#" noValidate>
          <button className='popup__close hover-style' type="button"
            aria-label="Закрыть окно без сохранения" onClick={this.props.onClose} />
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