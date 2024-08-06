import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/atoms/Button'
import { useDispatch } from 'react-redux'
import { logout } from '../stores/staffSlice'

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                        Products
                    </Link>

                    <Link to="/warranties" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                        Warranty
                    </Link>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between p-6 bg-white shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>

                    <Button type="button" onClick={handleLogout} label="Logout" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />
                </header>

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DefaultLayout
