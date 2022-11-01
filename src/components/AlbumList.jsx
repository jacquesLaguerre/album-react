import { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

export default function AlbumList({toggle}) {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-jbl.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)

    }, [toggle]) //run once when you first load....
    return (
        <main className="album-list">
            {!albums
                ? <p>Loading....</p>
                : albums.map(thisAlbum => <AlbumCard key={thisAlbum.albumId} thisAlbum={thisAlbum} />)
            }
        </main>

    )
}
