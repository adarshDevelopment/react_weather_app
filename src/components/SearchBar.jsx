import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../features/weather/weatherSlice';


function SearchBar() {

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(fetchWeather(location))
        setLocation('');
    }


    return (
        <>
            <div className="bg-green-400 w-[50%] mx-auto ">
                <form onSubmit={handleSubmitForm}>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="px-5 py-1 w-full focus:ring-0 text-2xl focus:outline-none text-gray-600 font-semibold border-t-0 border-r-0 border-l-0 border-b "
                        type="text"
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBar