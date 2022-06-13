import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import {ArticleList} from './components/ArticleList.jsx'
import { Header } from './components/Header';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<ArticleList/>}/>
      </Routes>
    </div>
  );
}

export default App;
