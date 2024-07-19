import { SongCard1, SongCard2, AlbumCard1, AlbumCard2, ArtistCard1, ArtistCard2 } from '../components'

const Home = () => {

    const artistData = {
        songName: 'Espresso',
        artistName: 'Sabriana Carpenter',
        posterURL: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
        poster_url: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
    }

    const albumData = {
        albumName: 'Alan Walker Mix',
        artistName: 'Alan Walker',
        posterURL: 'https://i1.sndcdn.com/artworks-000462643113-nks6oy-t500x500.jpg',
    }

    return (
        <>
            <div className='flex flex-col  gap-20'>
                <SongCard1 data={artistData} />
                <div className='w-1/2'>
                    <SongCard2 data={artistData} />
                </div>
                <AlbumCard1 data={albumData} />
                <AlbumCard2 data={albumData} />
                <ArtistCard1 data={artistData} />
                <ArtistCard2 data={artistData} />
            </div>
        </>
    )
}

export default Home