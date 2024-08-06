import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productSlice'

interface WarrantyState {
    warranties: Warranty[]
    error: string | null
}

export interface Warranty {
    id?: number
    customerName: string
    description: string
    product: Product
    status: string
}

export interface UpdateWarranty {
    id: number | undefined
    status: string
}

const initialWarranty: Warranty[] = [{
    id: 1,
    customerName: 'Sigit',
    description: 'Description warranty',
    status: 'pending',
    product: {
        id: 1,
        name: 'Product 1',
        description: 'Description product 1',
        image: ''
    }
}, {
    id: 2,
    customerName: 'Ari',
    description: 'Description warranty',
    status: 'pending',
    product: {
        id: 1,
        name: 'Product 1',
        description: 'Description product 1',
        image: ''
    }
}]

const initialState: WarrantyState = {
    warranties: JSON.parse(localStorage.getItem('warranties') || JSON.stringify(initialWarranty)),
    error: null
}

const warrantySlice = createSlice({
    name: 'warranty',
    initialState,
    reducers: {
        updateWarranty: (state, action: PayloadAction<UpdateWarranty>): void => {
            const index = state.warranties.findIndex(warranty => warranty.id === action?.payload?.id)

            if (index !== -1) {
                state.warranties[index].status = action?.payload?.status || 'pending'
                localStorage.setItem('warranties', JSON.stringify(state.warranties))
            }
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {
    updateWarranty,
    setError
} = warrantySlice.actions
export default warrantySlice.reducer
