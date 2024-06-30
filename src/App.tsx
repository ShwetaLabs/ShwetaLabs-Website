import logo from './logo.svg';
import './App.css';
import {StaggeredPara} from './components/paragraph/StaggeredPara';
import { paraData } from './data/test';
import { Header } from './components/header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { getMainAppRoutes } from './data/navigation';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        {
          getMainAppRoutes().map((route)=>{
            return <Route path={route.path} element={<route.element/>}/>
          })
        }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
