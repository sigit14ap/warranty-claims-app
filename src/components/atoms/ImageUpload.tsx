import React, { useState } from 'react'

interface ImageUploadProps {
  onChange: (file: File) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
        if (allowedTypes.includes(file.type)) {
            setSelectedFile(file)
            onChange(file)
            setError(null)
        } else {
            setError('Please upload a valid image file (PNG, JPEG, or JPG)')
        }
        }
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {error && <p className="text-red-500">{error}</p>}
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
    )
}

export default ImageUpload
