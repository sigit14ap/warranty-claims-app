import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    products: Product[]
    error: string | null
}

export interface Product {
    id?: number
    name: string
    description: string
    image: string
}

const initialState: ProductState = {
    products: JSON.parse(localStorage.getItem('products') || '[]'),
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct: (state, action: PayloadAction<Product>): void => {
            const newProduct = {
                ...action.payload,
                id: Date.now()
            }
            state.products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        updateProduct: (state, action: PayloadAction<Product>): void => {
            const index = state.products.findIndex(product => product.id === action.payload.id)

            if (index !== -1) {
                state.products[index] = action.payload
                localStorage.setItem('products', JSON.stringify(state.products))
            }
        },
        deleteProduct: (state, action: PayloadAction<number>): void => {
            const updatedProducts = state.products.filter(p => p.id !== action.payload)
            state.products = updatedProducts
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {
    createProduct,
    updateProduct,
    deleteProduct,
    setError
} = productSlice.actions
export default productSlice.reducer
