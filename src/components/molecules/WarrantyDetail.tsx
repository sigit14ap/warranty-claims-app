import React, { useEffect, useState } from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateWarranty, Warranty } from '../../stores/warrantySlice'
import Textarea from '../atoms/Textarea'
import { RootState } from '../../stores'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../atoms/Modal'
import ProcessWarrantyModal from './ProcessWarrantyModal'

interface WarrantyDetailProps {}

const WarrantyDetail: React.FC<WarrantyDetailProps> = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { warrantyId } = useParams()

    const warranties: Warranty[] = useSelector((state: RootState) => state.warranty.warranties)
    const warranty: Warranty | undefined = warranties.find(p => p.id === Number(warrantyId))

    useEffect(() => {
        if (!warranty) {
            navigate('/not-found')
        }
    })

    const [status, setStatus] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAction = (status: string) => {
        dispatch(updateWarranty({ id: warranty?.id, status }))
        setIsModalOpen(false)
        navigate('/warranties')
    }

    const handleOpenModal = (status: string) => {
        setIsModalOpen(true)
        setStatus(status)
    }

    return (
        <div>
            <div>
                <Label htmlFor="product">Product</Label>
                <Input type="text" name={'product'} placeholder="Product" value={warranty?.product?.name || ''} readonly={true}/>
            </div>
            <div>
                <Label htmlFor="name">Customer</Label>
                <Input type="text" name={'name'} placeholder="Customer name" value={warranty?.customerName || ''} readonly={true}/>
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea name={'description'} placeholder="Warranty description" value={warranty?.description || ''} readonly={true} />
            </div>

            <div>
                <Label htmlFor="status">Status</Label>
                <Input type="text" name={'status'} placeholder="Status" value={warranty?.status || ''} readonly={true}/>
            </div>

            {warranty?.status === 'pending' && 
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Button type="button" onClick={() => handleOpenModal('approved')} label="Approve" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full" />
                </div>
                <div >
                    <Button type="button" onClick={() => handleOpenModal('rejected')} label="Reject" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full" />
                </div>
            </div>}
            
            
                            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProcessWarrantyModal status={status} onAction={() => handleAction(status)} />
            </Modal>
        </div>
    )
}

export default WarrantyDetail
