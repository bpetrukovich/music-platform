import React from 'react'

export default function PagesButton({ icon, pageName }: { icon: string, pageName: string }) {
    return (
        <div>
            {icon}
            {pageName}
        </div>
    )
}

