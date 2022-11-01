export default function AlbumCard ({ thisAlbum }) {
    return (
        <div className="album" key={thisAlbum.albumId}>
          <h3>{thisAlbum.album}</h3>
          <p>
            {thisAlbum.year}, {thisAlbum.artist}
          </p>
        </div>
      )
}