import React from 'react'

interface TableRowProps {
  children: React.ReactNode
  className?: string
}

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
    return <tr className={`border-b ${className}`}>{children}</tr>
}

export default TableRow
