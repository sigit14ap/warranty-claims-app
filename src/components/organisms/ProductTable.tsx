import React from 'react'
import ProductList from '../molecules/ProductList'
import { Link } from 'react-router-dom'

const ProductTable: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full">

                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-3">
                        <h2 className="mb-9 text-2xl font-bold text-black lg:text-title-xl2">
                            Products
                        </h2>
                    </div>
                    <div className="col-span-2">
                        <Link to={`/products/create`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right">
                            Create
                        </Link>
                    </div>
                </div>

                <ProductList />
            </div>
        </div>
    )
}

export default ProductTable
