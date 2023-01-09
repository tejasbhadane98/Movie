import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Headers from './components/Header_Data/Heading';
import Dashboard from './components/Page_Info/Dashboard';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
   
     <Route path='/' element={<Dashboard/>}/>
      <Route path='movie/:id' element={<h1>movie details app</h1>}/>
       <Route path='movies/:type' element={<h1>movie list  page</h1>}/>
        {/* <Route path='headers' element={<Headers/>}/> */}
        <Route path='headers' element={<Headers/>}/>
        
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;