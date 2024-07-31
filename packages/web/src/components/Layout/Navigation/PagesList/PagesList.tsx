import React from 'react'
import PagesButton from './PagesButton'

export default function PagesList() {
    return (
        <nav className='bg-zinc-900 rounded-xl'>
            <PagesButton icon='M' pageName='Main' />
            <PagesButton icon='S' pageName='Search' />
        </nav>
    )
}

