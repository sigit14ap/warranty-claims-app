import React from 'react'
import LoginSection from '../organisms/LoginSection'
import AuthLayout from '../../layouts/AuthLayout'

const Login: React.FC = () => {
    return (
        <AuthLayout>
            <LoginSection />
        </AuthLayout>
    )
}

export default Login
