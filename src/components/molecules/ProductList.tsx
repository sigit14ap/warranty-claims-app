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
                <TableCell className="text-left">Name</TableCell>
                <TableCell className="text-left">Description</TableCell>
                <TableCell className="text-center">Actions</TableCell>
                </TableRow>
            </thead>
            <tbody>
                {products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell className="text-center">
                    <Link to={`/product/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Detail
                    </Link>
                    </TableCell>
                </TableRow>
                ))}
            </tbody>
        </Table>
    )
}

export default ProductList