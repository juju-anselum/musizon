import React, { useState, useRef, useEffect } from 'react';

const Search = () => {
    const [selectedTag, setSelectedTag] = useState('track');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const inputRef = useRef(null);

    const tags = [
        { value: 'artist', label: 'Artist' },
        { value: 'album', label: 'Album' },
        { value: 'track', label: 'Track' },
        { value: 'playlist', label: 'Playlist' },
    ];

    const handleSelectChange = (event) => {
        setSelectedTag(event.target.value);
    };

    useEffect(() => {
        const handleFocus = () => setIsSearchFocused(true);
        const handleBlur = () => setIsSearchFocused(false);

        const inputElement = inputRef.current;
        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        inputElement.focus();

        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <div className={`w-full md:w-1/2 mx-auto h-full flex flex-col items-center ${isSearchFocused ? 'justify-start pt-10' : 'justify-center'} gap-10 md:justify-center md:pt-0`}>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl font-lora font-semibold uppercase">Musizon</h1>
                <p className="text-3xl font-work-sans font-normal text-secondaryColorAccent tracking-wider">The Future of Music</p>
            </div>
            <div className="w-full h-max flex items-center justify-center gap-4">
                <div className='w-full'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-3 border rounded-md bg-primaryColorAccent outline-none border-primaryColorAccent"
                        ref={inputRef}
                    />
                </div>
                <select
                    name="tag"
                    id="tag"
                    value={selectedTag}
                    className='w-1/2 md:w-4/12 px-4 py-3 bg-primaryColorAccent outline-none rounded-md border border-primaryColorAccent'
                    onChange={handleSelectChange}
                >
                    {tags.map((tag, id) => (
                        <option
                            key={id}
                            value={tag.value}
                            className='bg-primaryColor text-white capitalize'
                        >
                            {tag.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Search;
