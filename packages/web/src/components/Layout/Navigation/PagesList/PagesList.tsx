import React from 'react'
import PagesButton from './PagesButton'
import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function PagesList() {
    return (
        <ul className='bg-zinc-900 rounded-xl p-3 text-lg overflow-auto'>
            <PagesButton Icon={BsHouseDoor} pageName='Main' />
            <PagesButton Icon={BsSearch} pageName='Search' />
        </ul>
    )
}

