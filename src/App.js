import "./App.css";
import { Routes, Route } from "react-router";
import { ArticleList } from "./components/ArticleList.jsx";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { SingleArticle } from "./components/SingleArticle";
import { userContext } from "./context/user";
import { useState } from 'react'
function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
