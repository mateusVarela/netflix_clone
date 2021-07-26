import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './services/finder/tmdb'
import MovieRow from './components/movieList/movieRow'
import FeaturedMovie from './components/featuredMovie/featuredMovie';

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList()
      setMovieList(list)

      const originals = list.filter(item => item.slug === "originals")
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo)
    }
    loadAll()
  }, [])
  console.log(movieList);
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}