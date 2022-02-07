import { ReactNode, useState } from 'react'
import './styles.css'

interface ModalProps {
    children?: ReactNode;
}

function Modal({ children }: ModalProps) {
    return (
        <div id='closer' className='modal'>
            <div className="modal-content">
                <span id='closer' className="close">&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal
