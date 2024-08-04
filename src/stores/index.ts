import {
    configureStore
} from '@reduxjs/toolkit'
import staffSlice from './staffSlice'
import productSlice from './productSlice'

export interface RootState {
    staff: ReturnType<typeof staffSlice>
    product: ReturnType<typeof productSlice>
}

export const store = configureStore({
    reducer: {
        staff: staffSlice,
        product: productSlice
    },
})

export default store
export type AppDispatch = typeof store.dispatch