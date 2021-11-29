import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/UserItemes/Header';
import SideMenu from './components/SideMenu/SideMenu';
import ZohaliVideo from './components/SideMenu/ZohaliVideo'

function App() {
  return (
    <div className="App">

<SideMenu/>
<Header/>
<ZohaliVideo/>
{/* <Home/> */}

    </div>
  );
}

export default App;
