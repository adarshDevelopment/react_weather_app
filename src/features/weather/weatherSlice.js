import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";


const initialState = {
    weather: {
        location: 'Set Location',
        temp: null,
        temp_max: null,
        temp_min: null,
        pressure: null,
        humidity: null
    },
    isLoading: false,
    isError: false
}

const api = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    key: import.meta.env.VITE_API_KEY
}



const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,

    extraReducers: (builder) => {

        builder
            .addCase(fetchWeather.pending, (state, action) => {
                // const {lcoation} = action;
                // console.log('inside pending', action.meta.arg);
                state.weather.location = action.arg;
                state.location = action.payload;
                state.isLoading = true;
            })
            .addCase(
                fetchWeather.fulfilled, (state, action) => {
                    const data = action.payload.main;
                    console.log(action);
                    state.weather.location = action.meta.arg;
                    state.weather.temp = data.temp;
                    state.weather.temp_min = data.payload;
                    state.weather.temp_max = data.temp_max;
                }
            )
            .addCase(
                fetchWeather.rejected, (state, action) => {

                    console.log('actin: ', action);
                    state.weather.location = action.meta.arg;
                    state.weather.data = action.payload.main.temp;
                    // state.weather = {
                    //     location: 'Set Location',
                    //     data: null,
                    //     isError: false

                    // };
                    state.isLoading = false;
                }
            );
    }

    // extraReducesr handle createAsyncThunk functions 

})


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location) => {

        const weather = await axios.get(`${api.baseUrl}?q=${location}&units=metric&appid=${api.key}`, {
            headers: {
                'Content-Type': 'application/json', // Tell the server we are sending JSON
                'Accept': 'application/json'         // Tell the server we expect JSON in return
            }
        });
        return weather.data;
    }
)

export default weatherSlice.reducer;
// export const { getWeather } = weatherSlice.actions

/*

    const getData = async () => {
                const result = await axios.get(`${api.baseUrl}/q=${action.payload}&unit=metric&appid=${api.key}`);
                console.log(result);
            }

*/


// axios.get(`${api.baseUrl}?q=${state.weather.location}&units=metric&appid=${api.key}`)
//     .then(result => {
//         console.log('result: ', result);
//         const temperature = result.data.main.temp
//         state.weather.temperature = temperature;
//     })
//     .catch(e => console.log('error: ', e))


/*

    reducers: {

        getWeather: (state, action) => {
            console.log('action.paylaod: ', action.payload);

            state.weather.location = action.payload

            const getData = async () => {
                useEF
                const result = await axios.get(`${api.baseUrl}?q=${state.weather.location}&units=metric&appid=${api.key}`)
                console.log('result inside async: ', result);
                return result;
            }

            getData();
            console.log('result: ', result);


        }
    },

*/