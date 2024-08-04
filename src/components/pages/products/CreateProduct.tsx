import React from 'react'
import CreateProductForm from '../../organisms/CreateProductForm'
import DefaultLayout from '../../../layouts/DefaultLayout'

const CreateProduct: React.FC = () => {
    return (
        <DefaultLayout>
            <CreateProductForm />
        </DefaultLayout>
    )
}

export default CreateProduct
