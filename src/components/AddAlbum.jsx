import {useState} from 'react'


export default function AddAlbum({setToggle, toggle}) {
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(2022)
    const handleSubmit =(e) => {
        e.preventDefault()
    
//let's check to see that they entered all the data
if(!album|| !artist|| !year){
    alert('Please enter all info')
    return
}
const newAlbum = {artist, album, year}
fetch('https://albums-api-jbl.web.app/albums', {
    method:'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newAlbum)
})
.then(() => {
    setToggle(!toggle)
    setAlbum('')
    setArtist('')
    setYear(2022)
})
.catch(alert)

}

    return(
        <section className="add-album">
            <h3>Add new album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                <input type="text" name='album'required onChange={e => setAlbum(e.target.value)} value={album}/>
<br />
                </label>
                <label htmlFor="artist">Artist:
                <input type="text" name='artist' required onChange={e => setArtist(e.target.value)} value={artist}/>
                
<br />
                </label>
                <label htmlFor="year">Year:
                <input type="text" name='year' required onChange={e => setYear(e.target.value)} value={year}/>

<br />
                </label>
                <input type='submit' value='Add Album'/>
            </form>
        </section>
    )
}
