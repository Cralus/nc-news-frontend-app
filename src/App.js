import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import {ArticleList} from './components/ArticleList.jsx'
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { SingleArticle } from './components/SingleArticle';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/articles' element={<ArticleList />}/>
        <Route path='/articles/:topic' element={<ArticleList />}/>
        <Route path='/article/:article_id' element={<SingleArticle/>}/>
      </Routes>
    </div>
  );
}

export default App;
