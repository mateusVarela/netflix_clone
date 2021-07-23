import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './services/finder/tmdb'
import MovieRow from './components/movieRow'

export default () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList()
      setMovieList(list)
      console.log(list);
    }
    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}