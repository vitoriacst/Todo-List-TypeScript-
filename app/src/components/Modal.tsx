
// css
import React from 'react';
import styles from './styles/Modal.module.css';

interface Props {
  children:React.ReactNode;
}


const Modal = ({children}: Props) => {
  const handleCloseModal = (event: React.MouseEvent) : void => {
    const Modal = document.querySelector('#modal')
    Modal!.classList.add("hide")
  }
  return (
    <div id='modal' className='hide'>
      <div className={styles.fade} onClick={handleCloseModal}>
      </div>
      <div className={styles.modal}>
        <h2>texto</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
