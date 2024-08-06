import React from 'react'
import WarrantyDetail from '../molecules/WarrantyDetail'

const DetailWarrantyForm: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full">

                <h2 className="mb-9 text-2xl font-bold text-black lg:text-title-xl2">
                    Detail Warranty
                </h2>

                <WarrantyDetail />
            </div>
        </div>
    )
}

export default DetailWarrantyForm
