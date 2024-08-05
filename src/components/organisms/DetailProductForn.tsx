import React from 'react'
import ProductDetail from '../molecules/ProductDetail'

const DetailProductForm: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full">

                <h2 className="mb-9 text-2xl font-bold text-black lg:text-title-xl2">
                    Detail Product
                </h2>

                <ProductDetail />
            </div>
        </div>
    )
}

export default DetailProductForm
