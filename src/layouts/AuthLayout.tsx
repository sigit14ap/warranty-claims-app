import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
