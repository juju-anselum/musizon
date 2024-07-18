import React from 'react'

const SongDetails = ({ data }) => {
    return (
        <div className='w-max flex items-stretch gap-3'>
            <img src={data.posterURL} alt="image" className='w-12 lg:w-16 aspect-square  object-cover rounded-md' />
            <div className='flex flex-col items-start justify-end gap-2'>
                <p className='text-sm lg:text-lg font-medium text-secondaryColor'>{data.songName}</p>
                <p className='text-xs lg:text-md font-normal text-secondaryColorAccent'>{data.artistName}</p>
            </div>
        </div>
    )
}

export default SongDetails