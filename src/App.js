import { Routes,  Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Favourites from "./Component/Favourites";
import { useContext } from "react";
import { AppContext } from "./Context/Appcontext";
function App() {

  const {handleSubmit,setSearchQuery,searchQuery} = useContext(AppContext)



  return (
    <div className=" w-full h-20">
      <nav className="flex flex-row justify-between mb-2">
        {
          <Link to='/'>
            <div className=" h-20 w-1/4 flex items-center">
              <h1 className="text-5xl ml-5 text-purple-500">
            FotoFlix
          </h1>
        </div>
          </Link>
        }
        <form className='flex justify-center items-center ' onClick={handleSubmit} >
          <input type="text" placeholder='Search' className=' w-[500px] p-2 border-purple-500 border-2 rounded-lg' onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery}/>
          <button className=' bg-purple-500 p-2.5 w-1/6 rounded-lg m-2 text-white' type="submit">
            Go
          </button>
        </form>
        <div className="flex flex-row items-center">
            <Link to="/favourites">
            <button class=" bg-purple-500 hover:bg-purple-600 focus:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-100 mr-20">
            Favourites
            </button>
            </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
      
    
  );
}

export default App;
