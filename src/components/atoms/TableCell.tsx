import React from 'react'

interface TableCellProps {
  children: React.ReactNode
  className?: string
  colSpan?: number
}

const TableCell: React.FC<TableCellProps> = ({ children, className, colSpan }) => {
    return <td className={`border px-4 py-2 ${className}`} colSpan={colSpan || 0}>{children}</td>
}

export default TableCell
