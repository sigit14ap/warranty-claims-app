import React from 'react'

interface TextareaProps {
    className?: string
    name: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent <HTMLTextAreaElement> ) => void
    error? : string
}

const Textarea: React.FC < TextareaProps > = ({
        className,
        name,
        placeholder,
        value,
        onChange,
        error
    }) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-2 ${className} ${error? 'border-red-500' : ''}`}
        />
    )
}

export default Textarea
