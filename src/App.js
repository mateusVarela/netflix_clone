import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './services/finder/tmdb'
import MovieRow from './components/movieList/movieRow'
import FeaturedMovie from './components/featuredMovie/featuredMovie';
import Header from './components/header/header'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

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
  
  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 15 ? setBlackHeader(true) : setBlackHeader(false)
    }
    window.addEventListener("scroll", scrollListener)


    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}