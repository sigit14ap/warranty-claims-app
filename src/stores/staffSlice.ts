import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'

export interface StaffState {
    isLoggedIn: boolean
    staffData: {
        email: string
    } | null
    error: string | null
}

interface AuthPayload {
    email: string
    password: string
}

const initialState: StaffState = {
    isLoggedIn: !!localStorage.getItem('staff'),
    staffData: localStorage.getItem('staff') ? JSON.parse(localStorage.getItem('staff')!) : null,
    error: null,
}

export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthPayload>) => {
            const { email } = action.payload
            state.isLoggedIn = true
            state.staffData = {
                email
            }
            state.error = null
            localStorage.setItem('staff', JSON.stringify({
                email
            }))
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.staffData = null
            state.error = null
            localStorage.removeItem('staff')
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {
    login,
    logout,
    setError
} = staffSlice.actions

export default staffSlice.reducer