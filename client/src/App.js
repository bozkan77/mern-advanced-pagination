import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import "./App.css";
// custom components
import Pagination from "./components/Pagination";
import Card from "./components/Card";

const App = () => {
  const match = useRouteMatch("/page/:pageNumber");

  const pageNumber = parseInt(match?.params?.pageNumber) || 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`);
        const { data, pages: totalPages } = await res.json();
        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError("Bir şeyler ters gitti.");
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      {loading ? (
        <h3 className="loading__text">Yükleniyor</h3>
      ) : error ? (
        <h3 className="loading__err">{error}</h3>
      ) : (
        <>
          <Pagination page={page} pages={pages} changePage={setPage} />
          <div className="app__posts">
            {posts.map((post) => {
              return <Card key={post._id} post={post} />;
            })}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  );
};

export default App;
