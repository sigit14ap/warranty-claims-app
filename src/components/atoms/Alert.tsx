import React from 'react'

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => {
    const alertClass = `border border-solid p-4 rounded ${
        type === 'success' ? 'bg-green-100 text-green-700' :
        type === 'error' ? 'bg-red-100 text-red-700' :
        type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
        'bg-blue-100 text-blue-700'
    }`

    return (
        <div className={`alert ${alertClass}`}>
            <p>{message}</p>
        </div>
    )
}

export default Alert
