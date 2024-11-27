import React from 'react'
import { useSelector } from 'react-redux'

function WeatherDisplay() {

    const data = useSelector(state => state.weather.weather)
    return (
        <>

            <div className="w-[50%] bg-yellow-400 mx-auto grid grid-cols-6 items-end">

                {/* Location */}

                <div className="bg-green-400 col-span-4 text-6xl text-gray-700 font-semibold ">
                    {data.location}
                </div>


                {/* temperature */}
                <div className="text-6xl flex-shrink-0 bg-blue-400 col-span-2 text-right" >
                    {data.temp ? data.temp : 'N/A'}

                </div>


            </div>


        </>
    )
}

export default WeatherDisplay