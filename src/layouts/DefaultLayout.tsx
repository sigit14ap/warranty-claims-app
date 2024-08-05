import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'

const Products: React.FC = () => <div>Products Content</div>
const Claims: React.FC = () => <div>Claims Content</div>

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
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
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between p-6 bg-white shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Logout
                    </button>
                </header>

                {/* Content */}
                <main className="flex-1 p-6">
                    {children}
                    <Routes>
                        <Route path="/products" Component={Products} />
                        <Route path="/claims" Component={Claims} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default DefaultLayout
