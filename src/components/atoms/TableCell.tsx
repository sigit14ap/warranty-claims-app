import React from 'react'

interface TableCellProps {
  children: React.ReactNode
  className?: string
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
    return <td className={`border px-4 py-2 ${className}`}>{children}</td>
}

export default TableCell
