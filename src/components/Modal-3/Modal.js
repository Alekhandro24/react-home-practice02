import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import 'components/Modal-3/Modal.scss';
// import { FaWindowClose } from 'react-icons/fa';

// [RN 18] Вебинар 5. Жизненный цикл. 23.06.20

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  // метод очистки за собою - EventListener, timout, interval
  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('click po bekdropy');

    // // де спрацював обробник події
    // console.log('curretTarget: ', e.currentTarget);
    // // де ми клацнули
    // console.log('target: ', e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    // public=>index.html=><div id="modal-root"></div>
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
