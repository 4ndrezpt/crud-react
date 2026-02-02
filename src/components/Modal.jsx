import { useState } from 'react';
export const Modal = ({ show, closeModal, id, title, message, criteria, onConfirm}) => {
  const [isOpen, setIsOpen] = useState(true);


  if(show) {
    return (
      <section className="dialog__difuser">
        <div className="modal__dialog">
          <button className="close__modal__button"
            onClick={closeModal}
          >Close</button>
          <h2>Warning { title ? title : ""}</h2>
          <p>{ message }</p>
          <p>{id} : {criteria}</p>
          <div className="modal__buttons">
            <button
              className="default__button"
              onClick={closeModal}>Cancel</button>
            <button
              onClick={onConfirm}
            >Accept</button>
          </div>
        </div>
      </section>
    );
  }else{
    return;
  }
}
