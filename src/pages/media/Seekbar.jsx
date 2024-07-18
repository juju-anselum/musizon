import React, { useState } from 'react'

const Seekbar = () => {
    const [value, setValue] = useState(100)
    return (
        <div>
            {console.log(value)}
            <div className="w-full flex items-center justify-center">
                <p className="text-white">0:00</p>
                <input
                    type="range"
                    step="any"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={0}
                    max={100}
                    className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
                />
                <p className="text-white">2:39</p>
            </div>
        </div>
    )
}

export default Seekbar