import React from 'react'
import Button from '../atoms/Button'

interface DeleteProductModalProps {
    productName: string
    onDelete: () => void
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ productName, onDelete }) => {
    return (
        <div>
            <p>Are you sure you want to delete product {productName}?</p>
            
            <Button type="button" onClick={onDelete} label="Delete" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4" />
        </div>
    )
}

export default DeleteProductModal
