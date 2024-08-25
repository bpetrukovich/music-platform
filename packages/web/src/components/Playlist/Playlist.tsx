import React from 'react'
import PlaylistHeader, { PlaylistEnum } from './PlaylistHeader/PlaylistHeader'
import TrackList from './TrackList/TrackList'

export default function Playlist() {
    return (
        <div>
            <PlaylistHeader
                type={PlaylistEnum.Playlist}
                author='Bogdan'
                name='Favorites'
            />
            <TrackList />
        </div>
    )
}

