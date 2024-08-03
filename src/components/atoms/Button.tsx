import React from 'react'

interface ButtonProps {
    type?: 'submit' | 'reset' | 'button'
    label: string
    onClick? : () => void
    className? : string
}

const Button: React.FC <ButtonProps> = ({
    type,
    label,
    onClick,
    className
}) => {
    return (
        <button
            type={type || 'button'}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button
