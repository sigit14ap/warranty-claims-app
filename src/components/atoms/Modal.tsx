import React from 'react'
import Button from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden' }`}>
            <div className="bg-white rounded shadow-md p-6">
                {children}

                <Button type="button" onClick={onClose} label="Close" className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full" />
            </div>
        </div>
    )
}

export default Modal
