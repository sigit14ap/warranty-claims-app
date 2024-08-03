import {
    configureStore
} from '@reduxjs/toolkit'
import staffSlice from './staffSlice'

export interface RootState {
    staff: ReturnType<typeof staffSlice>;
}

export const store = configureStore({
    reducer: {
        staff: staffSlice,
    },
})

export default store
export type AppDispatch = typeof store.dispatch