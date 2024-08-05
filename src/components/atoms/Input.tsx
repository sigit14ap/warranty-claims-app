import React from 'react'

interface InputProps {
    type? : string
    className?: string
    name: string
    placeholder: string
    value: string
    onChange?: (e: React.ChangeEvent <HTMLInputElement> ) => void
    error? : string
    readonly? : boolean
}

const Input: React.FC < InputProps > = ({
        type,
        className,
        name,
        placeholder,
        value,
        onChange,
        error,
        readonly
    }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            readOnly={readonly}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2 ${className} ${error? 'border-red-500' : ''}`}
        />
    )
}

export default Input
