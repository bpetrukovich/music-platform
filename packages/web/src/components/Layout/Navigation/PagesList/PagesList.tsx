import React from 'react'
import PagesButton from './PagesButton'

export default function PagesList() {
    return (
        <nav>
            <PagesButton icon='M' pageName='Main' />
            <PagesButton icon='S' pageName='Search' />
        </nav>
    )
}

