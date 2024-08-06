import React from 'react'
import WarrantyList from '../molecules/WarrantyList'

const WarrantyTable: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full">

                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-3">
                        <h2 className="mb-9 text-2xl font-bold text-black lg:text-title-xl2">
                            Warranty
                        </h2>
                    </div>
                </div>

                <WarrantyList />
            </div>
        </div>
    )
}

export default WarrantyTable
