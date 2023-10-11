import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import PageNotFound from './Components/404/404';
import DetailPage from './Components/Main/DetailPage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
