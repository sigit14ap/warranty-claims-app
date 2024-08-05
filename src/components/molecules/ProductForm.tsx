import React, { useEffect, useState } from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'
import ImageUpload from '../atoms/ImageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, Product, updateProduct } from '../../stores/productSlice'
import Textarea from '../atoms/Textarea'
import { RootState } from '../../stores'
import { setError } from '../../stores/productSlice'
import Alert from '../atoms/Alert'
import { useNavigate, useParams } from 'react-router-dom'

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { productId } = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)

    const error: string | null = useSelector((state: RootState) => state.product.error)
    const products: Product[] = useSelector((state: RootState) => state.product.products)
    const product: Product | undefined = products.find(p => p.id === Number(productId))

    useEffect(() => {
        setName(product?.name || '')
        setDescription(product?.description || '')
    }, [product])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !description || (!productId && !image)) {
            dispatch(setError('Please fill in all fields'))
            return
        }
        
        if (productId) {

            let imageName = image?.name

            if (!image) {
                imageName = product?.image
            }

            dispatch(updateProduct({ id: Number(productId), name, description, image: imageName || ''} ))
        } else {
            dispatch(createProduct({ name, description, image: image?.name || '' }))
        }

        navigate('/products')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <Alert type='error' message={error}/>}
            
            <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name={'name'} placeholder="Product name" value={name} onChange={(e)=>
                setName(e.target.value)} />
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea name={'description'} placeholder="Product description" value={description} onChange={(e)=> setDescription(e.target.value)} />
            </div>
            <div>
                <Label htmlFor="Image">Image</Label>
                <ImageUpload onChange={setImage} />
            </div>
            
            <Button type="submit" label="Submit" className="w-full" />
        </form>
    )
}

export default ProductForm
