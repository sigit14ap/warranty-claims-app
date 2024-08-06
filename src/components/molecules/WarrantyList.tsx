import React from 'react'
import Table from '../atoms/Table'
import TableRow from '../atoms/TableRow'
import TableCell from '../atoms/TableCell'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../stores'

const WarrantyList: React.FC = () => {
    const warranties = useSelector((state: RootState) => state.warranty.warranties)

    return (
        <Table className="table-auto">
            <thead>
                <TableRow>
                    <TableCell className="text-center">Product</TableCell>
                    <TableCell className="text-center">Customer</TableCell>
                    <TableCell className="text-center">Status</TableCell>
                    <TableCell className="text-center">Actions</TableCell>
                </TableRow>
            </thead>
            <tbody>
                {warranties && warranties.length > 0 ? warranties.map((warranty) => (
                <TableRow key={warranty.id}>
                    <TableCell className='text-center'>{warranty.product?.name}</TableCell>
                    <TableCell className='text-center'>{warranty.customerName}</TableCell>
                    <TableCell className='text-center'>{warranty.status}</TableCell>
                    <TableCell className="text-center">
                        <Link to={`/warranties/detail/${warranty.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Detail
                        </Link>
                    </TableCell>
                </TableRow>
                )) : (
                    <TableCell className='text-center' colSpan={4}>No data</TableCell>
                )}
            </tbody>
        </Table>
    )
}

export default WarrantyList
