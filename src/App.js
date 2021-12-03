import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/UserItemes/Header';
import SideMenu from './components/SideMenu/SideMenu';
import ZohaliVideo from './components/SideMenu/ZohaliVideo'
import About from './components/Pages/About/About';
import News from './components/Pages/News/News';
import Services from './components/Pages/Services/Services';
import Store from './components/Pages/Store/Store';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
 <SideMenu />
<Header />
        {/* <ZohaliVideo/> */}

        <Routes> 

          <Route path='/home' element={<Home />} exact />

          <Route path='/about' element={<About />} exact />

          <Route path='/news' element={<News />} exact />

          <Route path='/services' element={<Services />} exact />

          <Route path='/store' element={<Store />} exact />



        </Routes>
       
       
      
      </Router>
    </div>
  );
}

export default App;
