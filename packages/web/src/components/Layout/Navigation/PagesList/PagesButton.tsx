import React from 'react'
import { IconType } from 'react-icons'

export default function PagesButton({ Icon, pageName }: { Icon: IconType, pageName: string }) {
    return (
        <div>
            <Icon />
            {pageName}
        </div>
    )
}

