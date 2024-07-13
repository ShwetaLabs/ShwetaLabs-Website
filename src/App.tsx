import logo from './logo.svg';
import './App.css';
import {StaggeredPara} from './components/paragraph/StaggeredPara';
import { paraData } from './data/test';
import { Header } from './components/header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { getMainAppRoutes } from './data/navigation';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Routes>
          {
            getMainAppRoutes().map((route)=>{
              return <Route path={route.path} element={<route.element/>} key={route.path}/>
            })
          }
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
