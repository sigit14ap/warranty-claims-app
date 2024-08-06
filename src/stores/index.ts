import {
    configureStore
} from '@reduxjs/toolkit'
import staffSlice from './staffSlice'
import productSlice from './productSlice'
import warrantySlice from './warrantySlice'

export interface RootState {
    staff: ReturnType<typeof staffSlice>
    product: ReturnType<typeof productSlice>
    warranty: ReturnType<typeof warrantySlice>
}

export const store = configureStore({
    reducer: {
        staff: staffSlice,
        product: productSlice,
        warranty: warrantySlice
    },
})

export default store
export type AppDispatch = typeof store.dispatch