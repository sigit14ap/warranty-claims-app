import React from 'react'
import Button from '../atoms/Button'

interface ProcessWarrantyModalProps {
    status: string
    onAction: () => void
}

const ProcessWarrantyModal: React.FC<ProcessWarrantyModalProps> = ({ status, onAction }) => {
    return (
        <div>
            <p>Are you sure you want to {status} this warranty?</p>
            
            <Button type="button" onClick={onAction} label={status === 'approved' ? 'Approve' : 'Reject'} className={`${status === 'approved' ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4`} />
        </div>
    )
}

export default ProcessWarrantyModal
