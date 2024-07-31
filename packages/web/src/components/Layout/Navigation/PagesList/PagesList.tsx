import React from 'react'
import PagesButton from './PagesButton'
import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function PagesList() {
    return (
        <nav className='bg-zinc-900 rounded-xl'>
                <PagesButton Icon={BsHouseDoor} pageName='Main' />
                <PagesButton Icon={BsSearch} pageName='Search' />
        </nav>
    )
}

