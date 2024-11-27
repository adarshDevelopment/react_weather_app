import SearchBar from "./components/SearchBar"
import WeatherDisplay from "./components/WeatherDisplay"

function App() {

  return (
    <>
      <div className=' h-screen w-full bg-gradient-to-t from-slate-400 to-gray-400'>
        <div className="h-full bg-red-400 flex flex-col pt-24 container mx-auto gap-16">

          {/* search box  */}
          <SearchBar />



          {/* Location and temperature */}

          <WeatherDisplay />

        </div>
      </div>
    </>
  )
}

export default App


/*

<div className="w-[50%] bg-yellow-400 flex mx-auto justify-between items-end">



  <div className="flex-wrap flex-1 flex text-6xl text-gray-700 ">
    New York City
  </div>


  <div className="text-6xl flex-shrink-0">
    29 C
  </div>



  */