import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Layout, MovieDetailsPage, MovieListByFilmNamePage, MovieListByGenrePage, MoviesList} from "./components";


const App:FC  = () => {
  return (
      <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'/genre/:id'} element={<MovieListByGenrePage/>}/>
                <Route path={'/ByFilmName'} element={<MovieListByFilmNamePage/>}/>

            </Route>
        </Routes>
      </div>
  );
};

export default App;
