import React from 'react'
import ProductTable from '../../organisms/ProductTable'
import DefaultLayout from '../../../layouts/DefaultLayout'

const ProductList: React.FC = () => {
    return (
        <DefaultLayout>
            <ProductTable />
        </DefaultLayout>
    )
}

export default ProductList
