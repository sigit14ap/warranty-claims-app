import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    products: Product[]
    error: string | null
}

interface Product {
    id?: number
    name: string
    description: string
    image: string
}

const initialState: ProductState = {
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : [],
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        createProduct: (state, action: PayloadAction <Product> ) => {
            const newProduct = {
                ...action.payload,
                id: Date.now()
            }
            state.products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {
    createProduct,
    setError
} = productSlice.actions
export default productSlice.reducer
