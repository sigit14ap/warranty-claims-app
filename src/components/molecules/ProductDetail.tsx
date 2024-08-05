import React, { useEffect, useState } from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, Product } from '../../stores/productSlice'
import Textarea from '../atoms/Textarea'
import { RootState } from '../../stores'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../atoms/Modal'
import DeleteProductModal from './DeleteProductModal'

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { productId } = useParams()

    const products: Product[] = useSelector((state: RootState) => state.product.products)
    const product: Product | undefined = products.find(p => p.id === Number(productId))

    useEffect(() => {
        if (!product) {
            navigate('/not-found')
        }
    })

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const handleDelete = (productId: number) => {
        dispatch(deleteProduct(productId))
        setIsDeleteModalOpen(false)
        navigate('/products')
    }

    return (
        <div>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name={'name'} placeholder="Product name" value={product?.name || ''} readonly={true}/>
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea name={'description'} placeholder="Product description" value={product?.description || ''} readonly={true} />
            </div>
            <div>
                <Label htmlFor="Image">Image</Label>
                <Input type="text" name={'image'} placeholder="Product image" value={product?.image || ''} readonly={true}/>
            </div>
            
            <Button type="button" onClick={() => setIsDeleteModalOpen(true)} label="Delete " className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full" />
                            
            <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
                <DeleteProductModal productName={product?.name || ''} onDelete={() => handleDelete(Number(product?.id))} />
            </Modal>
        </div>
    )
}

export default ProductDetail
