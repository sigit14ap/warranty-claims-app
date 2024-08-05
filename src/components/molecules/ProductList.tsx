import React from 'react'
import Table from '../atoms/Table'
import TableRow from '../atoms/TableRow'
import TableCell from '../atoms/TableCell'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../stores'

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.product.products)

    return (
        <Table className="table-auto">
            <thead>
                <TableRow>
                    <TableCell className="text-center">Name</TableCell>
                    <TableCell className="text-center">Description</TableCell>
                    <TableCell className="text-center">Actions</TableCell>
                </TableRow>
            </thead>
            <tbody>
                {products && products.length > 0 ? products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell className='text-center'>{product.name}</TableCell>
                    <TableCell className='text-center'>{product.description}</TableCell>
                    <TableCell className="text-center">
                        <Link to={`/products/detail/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Detail
                        </Link>

                        <Link to={`/products/edit/${product.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Edit
                        </Link>
                    </TableCell>
                </TableRow>
                )) : (
                    <TableCell className='text-center' colSpan={3}>No data</TableCell>
                )}
            </tbody>
        </Table>
    )
}

export default ProductList
